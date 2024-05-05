import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import users from "./routes/user";
import cookieParser from "cookie-parser";
mongoose.connect((process.env.MONGODB_DATABASE || "development") as string);
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use("/api/auth", users);

app.listen(5000, () => {
  console.log(`server running..localHost:${5000}`);
});
