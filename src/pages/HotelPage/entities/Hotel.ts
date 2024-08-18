import { Amenity } from "../../../components/AmenitiesStack/entities/Amenity";

export interface Hotel {
  hotelName: string;
  location: string;
  description: string;
  latitude: number;
  longitude: number;
  amenities: Amenity[];
  starRating: number;
  availableRooms: number;
  imageUrl: string;
  cityId: number;
}
