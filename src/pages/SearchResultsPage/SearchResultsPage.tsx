import { Container, Grid, Toolbar } from "@mui/material";
import FilterComponent from "../../components/FilterComponent";
import HotelListings from "../../components/HotelListings";

const SearchResultsPage = () => {
  return (
    <Container maxWidth="xl">
      <Toolbar
        sx={{ minHeight: { xs: "20px !important", md: "56px !important" } }}
      />
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <FilterComponent />
        </Grid>
        <Grid item xs={12} md={7}>
          <HotelListings />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SearchResultsPage;
