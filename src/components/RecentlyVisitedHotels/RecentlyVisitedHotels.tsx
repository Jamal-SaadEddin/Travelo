import { Stack } from "@mui/material";
import { useRecentlyVisitedHotels } from "../../hooks/useRecentlyVisitedHotels";
import { useStyles } from "../../styles";
import HotelCard from "../common/HotelCard";

const RecentlyVisitedHotels = () => {
  const { hotelCardsStyles } = useStyles();
  const { data: hotels, isLoading } = useRecentlyVisitedHotels();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Stack direction="row" sx={hotelCardsStyles.cardsStackStyles}>
      {hotels?.map((hotel) => <HotelCard key={hotel.hotelId} hotel={hotel} />)}
    </Stack>
  );
};

export default RecentlyVisitedHotels;
