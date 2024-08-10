import { Stack } from "@mui/material";
import { cardsStackStyles } from "../../styles";
import HotelCard from "../common/HotelCard";
import { hotels } from "./constants/hotels";

const FeaturedDeals = () => {
  return (
    <Stack direction="row" sx={cardsStackStyles}>
      {hotels.map((hotel) => (
        <HotelCard key={hotel.hotelId} hotel={hotel} />
      ))}
    </Stack>
  );
};

export default FeaturedDeals;
