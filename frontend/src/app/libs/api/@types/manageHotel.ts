export type HotelFormData = {
  name: string;
  city: string;
  country: string;
  description: string;
  type: string;
  pricePerNight: number;
  starRating: number;
  facilities: string[];
  imageFiles: FileList;
  image: string;
  adultCount: number;
  childCount: number;
};

export type HotelList = {
  _id: string;
  name: string;
  city: string;
  country: string;
  description: string;
  type: string;
  pricePerNight: number;
  starRating: number;
  facilities: string[];
  imageFiles: FileList;
  image: string;
  adultCount: number;
  childCount: number;
};
export type HotelResponse = {
  data: HotelList[];
  message: string;
};
