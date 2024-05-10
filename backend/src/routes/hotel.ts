import express, { Response, Request } from "express";
import verifyToken from "../middleWare/auth";
import { HotelType } from "../shared/hotel";
import Hotel from "../model/hotel";
import { body } from "express-validator";
const router = express.Router();

const createHotelValidation = [
  body("name", "Name is requried!").isString(),
  body("city", "City is requried!").isString(),
  body("country", "Country is requried!").isString(),
  body("description", "description is requried!").isArray(),
  body("type", "Type is required!").isString(),
  body("facilities", "Facilities is required!").isString(),
  body("pricePerNight", "Price Per Night is required!").isNumeric(),
  body("adultCount", "Adult Count is required!").isNumeric(),
  body("childCount", "Child Count is required!").isNumeric(),
];

// Create Hotel
router.post(
  "/create-hotel",
  createHotelValidation,
  async (req: Request, res: Response) => {
    try {
      const newHotel: HotelType = req.body;
      const hotel = await new Hotel(newHotel);
      hotel.save();
      res.status(201).json({
        message: "Hotel create succefully!",
        data: { hotel },
      });
    } catch (e) {
      console.log(e);
      res.status(500).json({ message: "Something went wrong" });
    }
  }
);

// Hotel list
router.get("/hotel-list", async (req: Request, res: Response) => {
  try {
    const list = await Hotel.find().sort("-lastUpdated");
    res.status(200).json({
      message: "succefull",
      data: list,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Something went wrong" });
  }
});
export default router;
