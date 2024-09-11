import { Grid, Skeleton } from "@mui/material";
import { useTrendingDestinations } from "../../hooks/useTrendingDestinations";
import Destination from "./components/Destination";

const TrendingDestinations = () => {
  const { data: destinations, isLoading } = useTrendingDestinations();

  if (isLoading) {
    return (
      <Grid container spacing={3}>
        {Array.from({ length: 2 }).map((_, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Skeleton variant="rectangular" height={314} />
          </Grid>
        ))}
      </Grid>
    );
  }

  return (
    <Grid container spacing={2}>
      {destinations?.map((destination, index) => (
        <Grid
          item
          xs={12}
          sm={index <= 1 ? 6 : 4}
          height="330px"
          key={index + destination.cityId}
        >
          <Destination destination={destination} />
        </Grid>
      ))}
    </Grid>
  );
};

export default TrendingDestinations;
