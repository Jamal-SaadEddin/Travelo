import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { Box, Typography } from "@mui/material";
import HotelCard from "../common/HotelCard";
import useFilteredHotelsStore from "../FilterComponent/store/filteredHotelsStore";

const HotelListings = () => {
  const { filteredHotels } = useFilteredHotelsStore();

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={3}
      height={filteredHotels.length > 0 ? "auto" : "100%"}
      alignItems="center"
      justifyContent={filteredHotels.length > 0 ? "flex-start" : "center"}
    >
      {filteredHotels.length > 0 ? (
        filteredHotels.map((hotel) => (
          <HotelCard key={hotel.hotelId} hotel={hotel} />
        ))
      ) : (
        <Typography variant="h4" textAlign="center">
          No hotels match your filters.
          <br />
          <SentimentVeryDissatisfiedIcon sx={{ fontSize: "48px", mt: 1 }} />
        </Typography>
      )}
    </Box>
  );
};

export default HotelListings;
