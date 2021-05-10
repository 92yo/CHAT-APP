const http = require("http");
const scoketio = require("socket.io");
const express = require("express");
const path = require("path");
const cors = require("cors");
const dotenv = require("dotenv");
const helmet = require("helmet");
const connectDB = require("./config/db");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

//models
const User = require("../backend/models/userModel");
const Message = require("../backend/models/messageModel");

const jwt = require("jwt-then");

// Routes
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");

dotenv.config();

// MongoDB Init
connectDB();

const app = express();
const server = http.createServer(app);

const io = scoketio(server, {
  cors: {
    origin: "*",
  },
});

// Middlewares
app.use(cors());
app.use(express.json());
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

// Routes
app.use("/api/users", userRoutes);
app.use("/api/chatroom", chatRoutes);

// Error Handlers
app.use(notFound);
app.use(errorHandler);

const dirname = path.resolve();

// Heroku
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(dirname, "/client/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(dirname, "client", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is Running!");
  });
}

// Socket-io
io.use(async (socket, next) => {
  try {
    const token = socket.handshake.query.token;
    const payload = await jwt.verify(token, process.env.JWT_SECRET);
    socket.userId = payload.id;
    next();
  } catch (err) {
    throw new Error(err);
  }
});

io.on("connection", (socket) => {
  console.log("Connected: " + socket.userId);

  socket.on("joinRoom", ({ chatroomId }) => {
    socket.join(chatroomId);
    console.log(`${socket.userId} joined chatroom: ${chatroomId} `);
  });

  socket.on("leaveRoom", ({ chatroomId }) => {
    socket.leave(chatroomId);
    console.log("A user left chatroom: " + chatroomId);
  });

  socket.on("chatroomMessage", async ({ chatroomId, message }) => {
    if (message.trim().length > 0) {
      const user = await User.findOne({ _id: socket.userId });
      const newMessage = new Message({
        chatroom: chatroomId,
        user: socket.userId,
        message,
      });
      io.to(chatroomId).emit("newMessage", {
        message,
        name: user.name,
        userId: socket.userId,
      });
      await newMessage.save();
    }
  });

  socket.on("disconnect", async () => {
    console.log("Disconnected: " + socket.userId);
  });
});

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => console.log(`server has started on ${PORT}`));
