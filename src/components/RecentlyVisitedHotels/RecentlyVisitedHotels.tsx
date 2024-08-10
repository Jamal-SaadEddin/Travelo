import { Box, Typography, Stack } from "@mui/material";
import { cardsStackStyles } from "../../styles";
import { hotels } from "./constants/hotels";
import HotelCard from "../common/HotelCard";

const RecentlyVisitedHotels = () => {
  return (
    <Box pt={10}>
      <Typography variant="h4" gutterBottom>
        Recently Visited Hotels
      </Typography>
      <Stack direction="row" sx={cardsStackStyles}>
        {hotels.map((hotel) => (
          <HotelCard key={hotel.hotelId} hotel={hotel} />
        ))}
      </Stack>
    </Box>
  );
};

export default RecentlyVisitedHotels;
