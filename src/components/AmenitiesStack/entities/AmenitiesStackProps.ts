import { Amenity } from "./Amenity";

export interface AmenitiesStackProps {
  amenities: Amenity[];
  amenitySize?: "small" | "medium";
}
