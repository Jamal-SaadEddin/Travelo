import { Skeleton, Stack } from "@mui/material";
import { Amenity as AmenityProps } from "@src/entities/common/Amenity";
import Amenity from "./components/Amenity";

interface AmenitiesStackProps {
  amenities: AmenityProps[];
  amenitySize?: "small" | "medium";
  isLoading?: boolean;
}

const AmenitiesStack = ({
  amenities,
  amenitySize,
  isLoading = false,
}: AmenitiesStackProps) => {
  return (
    <Stack gap={1} justifyContent="center" flexDirection="row" flexWrap="wrap">
      {isLoading
        ? Array.from({ length: 6 }).map((_, index) => (
            <Skeleton key={index} variant="rounded" width={114} height={48} />
          ))
        : amenities.map((amenity) => (
            <Amenity key={amenity.name} size={amenitySize} {...amenity} />
          ))}
    </Stack>
  );
};

export default AmenitiesStack;
