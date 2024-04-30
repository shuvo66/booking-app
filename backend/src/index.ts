import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import users from "./routes/user";
mongoose.connect((process.env.MONGODB_DATABASE || "development") as string);
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/auth", users);

app.listen(5000, () => {
  console.log(`server running..localHost:${5000}`);
});
