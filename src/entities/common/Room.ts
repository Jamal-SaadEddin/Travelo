import { Amenity } from "./Amenity";

export interface Room {
  roomId: number;
  roomNumber: number | null;
  roomPhotoUrl: string;
  roomType: string;
  capacityOfAdults: number;
  capacityOfChildren: number;
  roomAmenities: Amenity[];
  price: number | null;
  availability: boolean;
}
