import { Stack } from "@mui/material";
import { useFeaturedDeals } from "../../hooks/useFeaturedDeals";
import { useStyles } from "../../styles";
import HotelCard from "../common/HotelCard";

const FeaturedDeals = () => {
  const { hotelCardsStyles } = useStyles();
  const { data: hotels, isLoading } = useFeaturedDeals();

  if (isLoading)
    return (
      <Stack direction="row" sx={hotelCardsStyles.cardsStackStyles}>
        Loading...
      </Stack>
    );

  return (
    <Stack direction="row" sx={hotelCardsStyles.cardsStackStyles}>
      {hotels?.map((hotel) => <HotelCard key={hotel.hotelId} hotel={hotel} />)}
    </Stack>
  );
};

export default FeaturedDeals;
