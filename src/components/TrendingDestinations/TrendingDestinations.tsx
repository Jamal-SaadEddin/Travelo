import { Grid } from "@mui/material";
import Destination from "./components/Destination";
import { destinations } from "./constants/destinations";

const TrendingDestinations = () => {
  return (
    <Grid container spacing={2}>
      {destinations.map((destination, index) => (
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
