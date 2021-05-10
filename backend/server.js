const express = require("express");
const path = require("path");
const cors = require("cors");
const dotenv = require("dotenv");
const helmet = require("helmet");
const connectDB = require("./config/db");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

// Routes
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");

dotenv.config();

// MongoDB Init
connectDB();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(helmet());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/chatroom", chatRoutes);

// Error Handlers
app.use(notFound);
app.use(errorHandler);

// Heroku
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is Running!");
  });
}

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`server has started on ${PORT}`));
