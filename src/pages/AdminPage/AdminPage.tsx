import FirstPageIcon from "@mui/icons-material/FirstPage";
import LastPageIcon from "@mui/icons-material/LastPage";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {
  Button,
  Container,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
} from "@mui/material";
import { useState } from "react";
import SearchBar from "../../components/SearchBar";
import CityCard from "./components/CityCard";
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

  const renderPaginationButtons = () => {
    const maxButtons = 4;
    const buttons: JSX.Element[] = [];

    // Calculate the range of buttons to display
    let start = Math.max(1, currentPage - Math.floor(maxButtons / 2));
    const end = Math.min(totalPages, start + maxButtons - 1);
    start = Math.max(1, end - maxButtons + 1);

    // Add first page button
    buttons.push(
      <IconButton
        key="first"
        onClick={() => handleClick(1)}
        disabled={currentPage === 1}
      >
        <FirstPageIcon />
      </IconButton>,
    );

    // Add previous page button
    buttons.push(
      <IconButton
        key="prev"
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <NavigateBeforeIcon />
      </IconButton>,
    );

    // Add pagination buttons
    for (let i = start; i <= end; i++) {
      buttons.push(
        <Button
          key={i}
          onClick={() => handleClick(i)}
          disabled={currentPage === i}
          sx={{
            bgcolor: currentPage === i ? "primary.light" : "inherit",
            p: 0,
            minWidth: 0,
            width: "36.5px",
            borderRadius: "100%",
            color: "inherit",
            "&:disabled": {
              color: "inherit",
            },
          }}
        >
          {i}
        </Button>,
      );
    }

    // Add next page button
    buttons.push(
      <IconButton
        key="next"
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <NavigateNextIcon />
      </IconButton>,
    );

    // Add last page button
    buttons.push(
      <IconButton
        key="last"
        onClick={() => handleClick(totalPages)}
        disabled={currentPage === totalPages}
      >
        <LastPageIcon />
      </IconButton>,
    );

    return buttons;
  };

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
        {renderPaginationButtons()}
      </Stack>
    </Container>
  );
};

export default AdminPage;
