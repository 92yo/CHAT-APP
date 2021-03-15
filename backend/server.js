import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import {
  notFound,
  errorHandler,
  developmentErrors,
  productionErrors,
} from "./middleware/errorMiddleware.js";

import { Server } from "socket.io";
import jwt from "jwt-then";

import userRoutes from "./routes/userRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/chatroom", chatRoutes);

if (process.env.NODE_ENV === "development") {
  app.use(developmentErrors);
} else {
  app.use(productionErrors);
}

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, console.log(`Server Running on ${PORT}`));

//Socket-IO

const io = new Server(server);

io.use(async (socket, next) => {
  try {
    const token = socket.handshake.query.token;
    const payload = await jwt.verify(token, process.env.SECRET);
    socket.userId = payload.id;
    next();
  } catch (err) {}
});

io.on("connection", (socket) => {
  console.log("Connected: " + socket.userId);

  socket.on("disconnect", () => {
    console.log("Disconnected: " + socket.userId);
  });
});
