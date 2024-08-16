import { Stack } from "@mui/material";
import Amenity from "./components/Amenity";
import { AmenitiesStackProps } from "./entities/AmenitiesStackProps";

const AmenitiesStack = ({ amenities }: AmenitiesStackProps) => {
  return (
    <Stack gap={1} flexDirection="row" flexWrap="wrap">
      {amenities.map((amenity) => (
        <Amenity key={amenity.name} {...amenity} />
      ))}
    </Stack>
  );
};

export default AmenitiesStack;
