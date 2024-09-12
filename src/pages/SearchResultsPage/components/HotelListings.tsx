import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { Box, Skeleton, Typography } from "@mui/material";
import HotelCard from "@src/components/common/HotelCard";
import { ListingHotel } from "@src/entities/common/Hotel";
import { useSearchHotels } from "@src/hooks/useSearchHotels";
import useSearchBoxStore from "@src/store/searchBoxStore";
import { useEffect } from "react";
import useFilteredHotelsStore from "./FilterComponent/store/filteredHotelsStore";

const HotelListings = () => {
  const { filteredHotels, setFilteredHotels } = useFilteredHotelsStore();

  const searchQueries = useSearchBoxStore((state) => state.searchQueries);
  const query = {
    checkInDate: searchQueries.checkIn.format("YYYY-MM-DD"),
    checkOutDate: searchQueries.checkOut.format("YYYY-MM-DD"),
    city: searchQueries.cityName,
    adults: searchQueries.adults,
    children: searchQueries.children,
    numberOfRooms: searchQueries.rooms,
  };
  const { data: hotels, isLoading } = useSearchHotels(query);

  useEffect(() => {
    if (hotels) setFilteredHotels(hotels);
  }, [hotels, setFilteredHotels]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={3}
      height={filteredHotels.length > 0 ? "auto" : "100%"}
      alignItems="center"
      justifyContent={filteredHotels.length > 0 ? "flex-start" : "center"}
    >
      {isLoading ? (
        Array.from({ length: 2 }).map((_, index) => (
          <Skeleton
            variant="rectangular"
            sx={{ width: "100%", maxWidth: 555, minWidth: 300 }}
            height={584}
            key={index}
          />
        ))
      ) : filteredHotels.length > 0 ? (
        filteredHotels.map((hotel) => (
          <HotelCard key={(hotel as ListingHotel).hotelId} hotel={hotel} />
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
