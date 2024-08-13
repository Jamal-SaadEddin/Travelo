import { Box } from "@mui/material";
import HotelCard from "../common/HotelCard";
import { hotels } from "./constants/hotels";

const HotelListings = () => {
  return (
    <Box display="flex" flexDirection="column" gap={3}>
      {hotels.map((hotel) => (
        <HotelCard key={hotel.hotelId} hotel={hotel} />
      ))}
    </Box>
  );
};

export default HotelListings;
