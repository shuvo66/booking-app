import express, { Request, Response } from "express";
import verifyToken from "../middleWare/auth";
import { v2 as cloudinary } from "cloudinary";

const router = express.Router();

router.post("/upload", verifyToken, async (req: Request, res: Response) => {
  const file = req?.files?.image as unknown as any;

  try {
    await cloudinary.uploader.upload(
      file.tempFilePath,
      (err: Error, result: any) => {
        try {
          res.sendStatus(201).json({
            url: result.url,
            id: result.asset_id,
            secure_url: result.secure_url,
          });
        } catch (err) {
          console.log(err);
        }
      }
    );
  } catch (err) {
    console.log(err);
  }

  res.send();
});
export default router;
