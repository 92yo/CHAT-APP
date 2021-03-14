import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import {
  notFound,
  errorHandler,
  developmentErrors,
  productionErrors,
} from "./middleware/errorMiddleware.js";

import userRoutes from "./routes/userRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use("/", userRoutes);

if (process.env.NODE_ENV === "development") {
  app.use(developmentErrors);
} else {
  app.use(productionErrors);
}

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server Running on ${PORT}`));
