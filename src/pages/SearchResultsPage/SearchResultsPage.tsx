import { Container, Grid, Toolbar } from "@mui/material";
import FilterComponent from "../../components/FilterComponent";
import HotelListings from "../../components/HotelListings";

const SearchResultsPage = () => {
  return (
    <Container maxWidth="lg">
      <Toolbar />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={5}>
          <FilterComponent />
        </Grid>
        <Grid item xs={12} sm={7}>
          <HotelListings />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SearchResultsPage;
