import { Amenity } from "./Amenity";

export interface FeaturedDealHotel {
  hotelId: number;
  originalRoomPrice: number;
  discount: number;
  finalPrice: number;
  cityName: string;
  hotelName: string;
  hotelStarRating: number;
  title: string;
  description: string;
  roomPhotoUrl: string;
}

export interface RecentlyVisitedHotel {
  hotelId: number;
  hotelName: string;
  starRating: number;
  visitDate: string;
  cityName: string;
  thumbnailUrl: string;
  priceLowerBound: number;
  priceUpperBound: number;
}

export interface ListingHotel {
  hotelId: number;
  hotelName: string;
  starRating: number;
  latitude: number;
  longitude: number;
  roomPrice: number;
  roomType: string;
  cityName: string;
  roomPhotoUrl: string;
  discount: number;
  amenities: Amenity[];
}

export interface AdminHotel {
  id?: number;
  name: string;
  description: string;
  hotelType: number | null;
  starRating: number | null;
  latitude: number | null;
  longitude: number | null;
  cityId?: number | null;
}

export interface HotelPage_Hotel {
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

export type Hotel =
  | FeaturedDealHotel
  | RecentlyVisitedHotel
  | ListingHotel
  | AdminHotel
  | HotelPage_Hotel;
