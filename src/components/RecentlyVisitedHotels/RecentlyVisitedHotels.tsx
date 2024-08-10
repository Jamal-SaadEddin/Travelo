import { Box, Typography, Stack } from "@mui/material";
import HotelCard from "./components/HotelCard";
import { cardsStackStyles } from "../FeaturedDeals/styles";
import { hotels } from "./constants/hotels";

const RecentlyVisitedHotels = () => {
  return (
    <Box pt={10}>
      <Typography variant="h4" gutterBottom>
        Recently Visited Hotels
      </Typography>
      <Stack direction="row" sx={cardsStackStyles}>
        {hotels.map((hotel) => (
          <HotelCard key={hotel.hotelId} />
        ))}
      </Stack>
    </Box>
  );
};

export default RecentlyVisitedHotels;
