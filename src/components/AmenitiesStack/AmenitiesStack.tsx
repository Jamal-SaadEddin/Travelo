import { Stack } from "@mui/material";
import Amenity from "./components/Amenity";
import { hotelAmenities } from "./constants/hotelAmenities";

const AmenitiesStack = () => {
  return (
    <Stack gap={1} flexDirection="row" flexWrap="wrap">
      {hotelAmenities.map((amenity) => (
        <Amenity key={amenity.name} {...amenity} />
      ))}
    </Stack>
  );
};

export default AmenitiesStack;
