import { Stack } from "@mui/material";
import Amenity from "./components/Amenity";
import { AmenitiesStackProps } from "./entities/AmenitiesStackProps";

const AmenitiesStack = ({ amenities, amenitySize }: AmenitiesStackProps) => {
  return (
    <Stack gap={1} justifyContent="center" flexDirection="row" flexWrap="wrap">
      {amenities.map((amenity) => (
        <Amenity key={amenity.name} size={amenitySize} {...amenity} />
      ))}
    </Stack>
  );
};

export default AmenitiesStack;
