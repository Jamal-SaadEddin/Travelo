import { Grid, Skeleton, Stack } from "@mui/material";
import { useRecentlyVisitedHotels } from "../../hooks/useRecentlyVisitedHotels";
import { useStyles } from "../../styles";
import HotelCard from "../common/HotelCard";

const RecentlyVisitedHotels = () => {
  const { hotelCardsStyles } = useStyles();
  const { data: hotels, isLoading } = useRecentlyVisitedHotels();

  if (isLoading) {
    return (
      <Grid container spacing={3}>
        {Array.from({ length: 3 }).map((_, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Skeleton variant="rectangular" height={424} />
          </Grid>
        ))}
      </Grid>
    );
  }

  return (
    <Stack direction="row" sx={hotelCardsStyles.cardsStackStyles}>
      {hotels?.map((hotel) => <HotelCard key={hotel.hotelId} hotel={hotel} />)}
    </Stack>
  );
};

export default RecentlyVisitedHotels;
