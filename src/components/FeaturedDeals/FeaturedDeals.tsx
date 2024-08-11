import { Box, Stack, Typography } from "@mui/material";
import HotelCard from "./components/HotelCard";
import { hotels } from "./constants/hotels";
import { cardsStackStyles } from "./styles";

const FeaturedDeals = () => {
  return (
    <Box pt={7}>
      <Typography variant="h4" gutterBottom>
        Featured Deals
      </Typography>
      <Stack direction="row" sx={cardsStackStyles}>
        {hotels.map((hotel) => (
          <HotelCard key={hotel.hotelId} hotel={hotel} />
        ))}
      </Stack>
    </Box>
  );
};

export default FeaturedDeals;
