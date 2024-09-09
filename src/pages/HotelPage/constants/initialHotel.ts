import { Hotel } from "../entities/Hotel";

export const initialHotel: Hotel = {
  hotelName: "",
  location: "",
  description: "",
  latitude: 0,
  longitude: 0,
  amenities: [
    {
      name: "",
      description: "",
    },
  ],
  starRating: 0,
  availableRooms: 0,
  imageUrl: "",
  cityId: 0,
};
