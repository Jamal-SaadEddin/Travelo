import { Grid, Skeleton, Stack } from "@mui/material";
import HotelCard from "@src/components/common/HotelCard";
import { RecentlyVisitedHotel } from "@src/entities/common/Hotel";
import { useRecentlyVisitedHotels } from "@src/hooks/useRecentlyVisitedHotels";
import { useStyles } from "@src/styles";

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
      {hotels?.map((hotel) => (
        <HotelCard
          key={(hotel as RecentlyVisitedHotel).hotelId}
          hotel={hotel}
        />
      ))}
    </Stack>
  );
};

export default RecentlyVisitedHotels;
