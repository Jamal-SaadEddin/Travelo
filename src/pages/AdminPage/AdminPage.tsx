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
import axios from "axios";
import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar";
import GenericCard from "./components/GenericCard";
import { renderPaginationButtons } from "./components/PaginationButtons";
import { City, Hotel } from "./entities";

const AdminPage = ({ cardType }: { cardType: "hotel" | "city" }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(9);
  const [totalPages, setTotalPages] = useState(1);
  const [items, setItems] = useState<(City | Hotel)[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      let apiUrl: string;

      if (cardType === "hotel") {
        apiUrl = `https://app-hotel-reservation-webapi-uae-dev-001.azurewebsites.net/api/hotels?pageSize=${cardsPerPage}&pageNumber=${currentPage}`;
        const response = await axios.get(apiUrl);
        setItems(response.data);
        const pagination = JSON.parse(response.headers["x-pagination"]);
        setTotalPages(pagination.TotalPageCount);
      } else {
        apiUrl = `https://app-hotel-reservation-webapi-uae-dev-001.azurewebsites.net/api/cities`;
        const response = await axios.get(apiUrl);
        setItems(response.data);
      }
    };

    fetchData();
  }, [cardType, currentPage, cardsPerPage]);

  const handleClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleSelectChange = (event: SelectChangeEvent) => {
    const value = parseInt(event.target.value, 10);
    setCardsPerPage(value);
    setCurrentPage(1);
  };

  return (
    <Container maxWidth="lg">
      <SearchBar />
      <Stack
        direction="row"
        justifyContent={totalPages > 1 ? "right" : "left"}
        my={3}
      >
        {totalPages > 1 && (
          <FormControl>
            <InputLabel>Items per page</InputLabel>
            <Select
              label="Items per page"
              value={cardsPerPage.toString()}
              onChange={handleSelectChange}
            >
              <MenuItem value={9}>9 items per page</MenuItem>
              <MenuItem value={18}>18 items per page</MenuItem>
            </Select>
          </FormControl>
        )}
        {totalPages === 1 && "All items: " + items.length}
      </Stack>
      <Grid container spacing={3}>
        {items.map((item) => (
          <Grid item xs={12} md={6} lg={4} key={item.id}>
            <GenericCard item={item} type={cardType} />
          </Grid>
        ))}
      </Grid>
      {cardType === "hotel" && (
        <Stack direction="row" justifyContent="center" mt={3}>
          {renderPaginationButtons({ currentPage, totalPages, handleClick })}
        </Stack>
      )}
    </Container>
  );
};

export default AdminPage;
