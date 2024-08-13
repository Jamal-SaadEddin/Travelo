import { Container, Toolbar } from "@mui/material";
import FilterComponent from "../../components/FilterComponent";

const SearchResultsPage = () => {
  return (
    <Container maxWidth="lg">
      <Toolbar />
      <FilterComponent />
    </Container>
  );
};

export default SearchResultsPage;
