import express, { Response, Request } from "express";
import verifyToken from "../middleWare/auth";
import { HotelType } from "../shared/hotel";
import Hotel from "../model/hotel";
import { body } from "express-validator";
const router = express.Router();

const createAndEditHotelValidation = [
  body("name").notEmpty().withMessage("Name is requried!"),
  body("city").notEmpty().withMessage("City is requried!"),
  body("country").notEmpty().withMessage("Country is requried!"),
  body("description").notEmpty().withMessage("Description is requried!"),
  body("type").notEmpty().withMessage("Type is requried!"),
  body("facilities").notEmpty().withMessage("Facilities is requried!"),
  body("pricePerNight").notEmpty().withMessage("Price Per-Night is requried!"),
  body("adultCount").notEmpty().withMessage("Adult-Count is requried!"),
  body("childCount").notEmpty().withMessage("child-Count is requried!"),
];

// Create Hotel
router.post(
  "/create-hotel",
  createAndEditHotelValidation,
  verifyToken,
  async (req: Request, res: Response) => {
    try {
      const newHotel: HotelType = req.body;
      const hotel = await new Hotel(newHotel);
      hotel.save();
      res.status(201).json({
        message: "Hotel create succefully!",
      });
    } catch (e) {
      console.log(e);
      res.status(500).json({ message: "Something went wrong" });
    }
  }
);

router.put(
  "/edit-hotel/:hotelid",
  createAndEditHotelValidation,
  verifyToken,
  async (req: Request, res: Response) => {
    try {
      const hotelId = req.params.hotelid;
      if (!hotelId) {
        return res.status(400).json({ message: "Hotel not found" });
      }

      const hotel = await Hotel.findByIdAndUpdate(hotelId, { ...req.body });

      if (!hotel) {
        return res.status(400).json({ message: "Hotel not found" });
      }
      await hotel.save();
      res.status(200).json({ message: "update seccessfully!" }).send();
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

// Hotel delete
router.delete(
  "/hotel-delete/:hotelId",
  verifyToken,
  async (req: Request, res: Response) => {
    try {
      const hotelId = req.params.hotelId;
      if (!hotelId) {
        return res.status(400).json({ message: "Hotel not found" });
      }

      const removeHotel = await Hotel.findByIdAndDelete(hotelId);
      res.status(200).json({ message: "Delete successfully!" });
    } catch (e) {
      console.log(e);
      res.status(500).json({ message: "Something went wrong" });
    }
  }
);
export default router;
