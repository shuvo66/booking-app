import jwt, { JwtPayload } from "jsonwebtoken";
import express, { NextFunction, Request, Response } from "express";

declare global {
  namespace Express {
    interface Request {
      userID: string;
      auth_token: string;
    }
  }
}
const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies["auth_token"];
  if (!token) {
    res.status(401).json({ message: "unauthorizedsss" });
  }
  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET_KEY as string);
    req.userID = (decode as JwtPayload).userID;
    next();
  } catch (err) {
    return res.status(401).json({ message: "unauthorized" });
  }
};

export default verifyToken;
