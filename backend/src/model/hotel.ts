import mongoose from "mongoose";
import { HotelType } from "../shared/hotel";

const hotelSchema = new mongoose.Schema({
  name: { type: String, require: true },
  city: { type: String, require: true },
  country: { type: String, require: true },
  description: { type: String, require: true },
  pricePerNight: { type: Number, require: true },
  starRating: { type: Number, require: true },
  imageUrls: { type: String, require: true },
  type: { type: String, require: true },
  adultCount: { type: Number, require: true },
  childCount: { type: Number, require: true },
  facilities: [{ type: String, require: true }],
});
const hotel = mongoose.model<HotelType>("Hotel", hotelSchema);
export default hotel;
