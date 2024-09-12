import { Container, Grid, Toolbar } from "@mui/material";
import HotelListings from "./components/HotelListings";
import SearchBox from "../../components/common/SearchBox";
import FilterComponent from "./components/FilterComponent";

const SearchResultsPage = () => {
  return (
    <Container maxWidth="xl">
      <Toolbar
        sx={{ minHeight: { xs: "20px !important", md: "56px !important" } }}
      />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <SearchBox regularStyle />
        </Grid>
        <Grid item xs={12} md={6}>
          <FilterComponent />
        </Grid>
        <Grid item xs={12} md={6}>
          <HotelListings />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SearchResultsPage;
