import { Grid, Skeleton, Stack } from "@mui/material";
import { useFeaturedDeals } from "../../hooks/useFeaturedDeals";
import { useStyles } from "../../styles";
import HotelCard from "../common/HotelCard";

const FeaturedDeals = () => {
  const { hotelCardsStyles } = useStyles();
  const { data: hotels, isLoading } = useFeaturedDeals();

  if (isLoading)
    return (
      <Grid container spacing={3}>
        {Array.from({ length: 4 }).map((_, index) => (
          <Grid item xs={12} sm={6} md={4} xl={3} key={index}>
            <Skeleton variant="rectangular" height={526} />
          </Grid>
        ))}
      </Grid>
    );

  return (
    <Stack direction="row" sx={hotelCardsStyles.cardsStackStyles}>
      {hotels?.map((hotel) => <HotelCard key={hotel.hotelId} hotel={hotel} />)}
    </Stack>
  );
};

export default FeaturedDeals;
