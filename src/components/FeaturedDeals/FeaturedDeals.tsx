import { Stack } from "@mui/material";
import { hotelCardsStyles } from "../../styles";
import HotelCard from "../common/HotelCard";
import { hotels } from "./constants/hotels";

const FeaturedDeals = () => {
  return (
    <Stack direction="row" sx={hotelCardsStyles.cardsStackStyles}>
      {hotels.map((hotel) => (
        <HotelCard key={hotel.hotelId} hotel={hotel} />
      ))}
    </Stack>
  );
};

export default FeaturedDeals;
