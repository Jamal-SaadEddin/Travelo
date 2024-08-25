import {
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
} from "@mui/material";
import { useState } from "react";
import SearchBar from "../../components/SearchBar";
import CityCard from "./components/CityCard";
import { renderPaginationButtons } from "./components/PaginationButtons";
import { cities } from "./constants";

const AdminPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(9); // Default value is 9
  const totalPages = Math.ceil(cities.length / cardsPerPage);

  const handleClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleSelectChange = (event: SelectChangeEvent) => {
    const value = parseInt(event.target.value, 10);
    setCardsPerPage(value);
    setCurrentPage(1);
  };

  const indexOfLastCity = currentPage * cardsPerPage;
  const indexOfFirstCity = indexOfLastCity - cardsPerPage;
  const currentCities = cities.slice(indexOfFirstCity, indexOfLastCity);

  return (
    <Container maxWidth="lg">
      <SearchBar />
      <Stack direction="row" justifyContent="right" my={3}>
        <FormControl>
          <InputLabel>Cities per page</InputLabel>
          <Select
            label="Cities per page"
            value={cardsPerPage.toString()}
            onChange={handleSelectChange}
          >
            <MenuItem value={9}>9 cities per page</MenuItem>
            <MenuItem value={18}>18 cities per page</MenuItem>
            <MenuItem value={27}>27 cities per page</MenuItem>
            <MenuItem value={cities.length}>All cities</MenuItem>
          </Select>
        </FormControl>
      </Stack>
      <Grid container spacing={3}>
        {currentCities.map((city) => (
          <Grid item xs={12} md={6} lg={4} key={city.id}>
            <CityCard city={city} />
          </Grid>
        ))}
      </Grid>
      <Stack direction="row" justifyContent="center" mt={3}>
        {renderPaginationButtons({ currentPage, totalPages, handleClick })}
      </Stack>
    </Container>
  );
};

export default AdminPage;
