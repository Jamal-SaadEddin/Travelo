import { Grid } from "@mui/material";
import { useTrendingDestinations } from "../../hooks/useTrendingDestinations";
import Destination from "./components/Destination";

const TrendingDestinations = () => {
  const { data: destinations, isLoading } = useTrendingDestinations();

  if (isLoading) {
    return <p>Loading...</p>;
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
