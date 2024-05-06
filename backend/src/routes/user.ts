import express, { Request, Response } from "express";
import User from "../model/user";
import jwt, { JwtPayload } from "jsonwebtoken";
import bcrypt from "bcryptjs";
const nodemailer = require("nodemailer");

import { check, validationResult } from "express-validator";
import verifyToken from "../middleWare/auth";
import { mailService } from "../mailService";

const router = express.Router();
const key = process.env.JWT_SECRET_KEY as string;

const registrationValidation = [
  check("email", "Email is requried!").isEmail(),
  check("firstName", "First Name is requried!").isString(),
  check("lastName", "Last Name is requried!").isString(),
  check("password", "Password is requried!").isLength({ min: 6 }),
];
const loginValidation = [
  check("email", "Email is requried!").isEmail(),
  check("password", "Password is requried!").isLength({ min: 6 }),
];

//registrtion
router.post(
  "/register",
  registrationValidation,
  async (req: Request, res: Response) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ message: error.array() });
    }
    try {
      let checkUser = await User.findOne({
        email: req.body.email,
      });
      if (checkUser) {
        return res.status(400).json({ message: "User Already Exist!" });
      }
      const createuser = new User(req.body);
      createuser.save();

      const token = jwt.sign({ userID: createuser.id }, key, {
        expiresIn: "1d",
      });
      res.cookie("auth_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 86400000,
      });
      return res.status(200).json({
        message: "user create successfully!",
        data: { createuser, token: token },
      });
    } catch (err) {}
  }
);

//login
router.post("/login", loginValidation, async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ message: error.array() });
  }

  try {
    const existUser = await User.findOne({ email });
    if (!existUser) {
      return res.status(400).json({ message: "User not found!" });
    }
    const isMatch = await bcrypt.compare(password, existUser!.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credential!" });
    }

    const token = jwt.sign({ userID: existUser.id }, key, { expiresIn: "1d" });

    res.cookie("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });

    return res.status(200).json({
      message: "User Logged In",
      data: {
        user: {
          _id: existUser._id,
          email: existUser?.email,
          firstName: existUser?.firstName,
          lastName: existUser?.lastName,
        },
        accessToken: token,
      },
    });
  } catch (error) {
    console.log(error);
  }
});

// verification-token
router.get("/validate-token", verifyToken, (req: Request, res: Response) => {
  res.status(200).send({ userID: req.userID });
});

// logout
router.get("/log-out", (req: Request, res: Response) => {
  res.cookie("auth_token", " ", {
    expires: new Date(0),
  });
  res.status(200).json({ message: "successfully logout!" });
});

// reset password

router.post("/reset-password", async (req: Request, res: Response) => {
  const { email } = req.body;

  try {
    const existUser = await User.findOne({ email });
    const plainPassword = await bcrypt.hash("jzeb_pgzf", 8);

    if (existUser) {
      await User.findByIdAndUpdate(existUser?._id, {
        password: plainPassword,
      });

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "atikul.shuvo6632@gmail.com",
          pass: "jzeb pgzf zlsg pvgs",
        },
      });

      // send mail with defined transport object
      const info = await transporter.sendMail({
        from: "atikul.shuvo6632@gmail.com",
        to: email,
        subject: "Booking-App : Reset Password OTP",
        html: `Your OTP for reset password is <b>${"111111"}</b>`,
      });

      return res.status(200).json({
        message: "Please check your email.we send to you a new password!",
      });
    }
  } catch (err) {}
});

export default router;
