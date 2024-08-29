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
import RoomCard from "../../components/AvailableRooms/components/RoomCard";
import SearchBar from "../../components/SearchBar";
import { Room } from "../../entities";
import AddCityDialog from "./components/AddCityDialog";
import AddHotelDialog from "./components/AddHotelDialog";
import AddRoomDialog from "./components/AddRoomDialog";
import GenericCard from "./components/GenericCard";
import { renderPaginationButtons } from "./components/PaginationButtons";
import { City, Hotel } from "./entities";

const baseApiUrl = import.meta.env.VITE_BASE_API_URL;

const AdminPage = ({ cardType }: { cardType: "hotel" | "city" | "room" }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(9);
  const [totalPages, setTotalPages] = useState(1);
  const [items, setItems] = useState<(City | Hotel | Room)[]>([]);
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [selectedHotel, setSelectedHotel] = useState<number | null>(null);
  const todayDate = new Date().toISOString().split("T")[0]; // Format today's date

  useEffect(() => {
    const fetchHotels = async () => {
      const response = await axios.get(`${baseApiUrl}/hotels`);
      setHotels(response.data);
      if (response.data.length > 0) {
        setSelectedHotel(response.data[0].id); // Set default to the first hotel
      }
    };

    if (cardType === "room") {
      fetchHotels();
    }
  }, [cardType]);

  useEffect(() => {
    const fetchData = async () => {
      let apiUrl: string;

      if (cardType === "hotel") {
        apiUrl = `${baseApiUrl}/hotels?pageSize=${cardsPerPage}&pageNumber=${currentPage}`;
        const response = await axios.get(apiUrl);
        setItems(response.data);
        const pagination = JSON.parse(response.headers["x-pagination"]);
        setTotalPages(pagination.TotalPageCount);
      } else if (cardType === "city") {
        apiUrl = `${baseApiUrl}/cities`;
        const response = await axios.get(apiUrl);
        setItems(response.data);
        setTotalPages(1); // No pagination for cities
      } else if (cardType === "room" && selectedHotel) {
        apiUrl = `${baseApiUrl}/hotels/${selectedHotel}/rooms?checkInDate=${todayDate}&checkOutDate=${todayDate}`;
        const response = await axios.get(apiUrl);
        setItems(response.data);
        setTotalPages(1); // Assuming no pagination needed for rooms
      }
    };

    fetchData();
  }, [cardType, currentPage, cardsPerPage, selectedHotel, todayDate]);

  const handleClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleSelectChange = (event: SelectChangeEvent) => {
    const value = parseInt(event.target.value, 10);
    setCardsPerPage(value);
    setCurrentPage(1);
  };

  const handleHotelChange = (event: SelectChangeEvent) => {
    setSelectedHotel(parseInt(event.target.value, 10));
  };

  const handleAddCity = (newCity: City) =>
    setItems((prev) => [...prev, newCity]);
  const handleAddHotel = (newHotel: Hotel) =>
    setItems((prev) => [...prev, newHotel]);
  const handleAddRoom = (newRoom: Room) => {
    setItems([newRoom, ...items]);
  };

  return (
    <Container maxWidth="lg">
      <SearchBar />
      <Stack direction="row" justifyContent="right" my={3} spacing={2}>
        {cardType === "city" && <AddCityDialog onAdd={handleAddCity} />}
        {cardType === "hotel" && <AddHotelDialog onAdd={handleAddHotel} />}
        {cardType === "room" && (
          <AddRoomDialog
            onAdd={handleAddRoom}
            selectedHotel={selectedHotel}
            hotels={hotels}
          />
        )}
        {cardType === "hotel" && totalPages > 1 && (
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

        {cardType === "room" && hotels.length > 0 && (
          <FormControl>
            <InputLabel>Hotel</InputLabel>
            <Select
              label="Hotel"
              value={selectedHotel?.toString() || ""}
              onChange={handleHotelChange}
            >
              {hotels.map((hotel) => (
                <MenuItem key={hotel.id} value={hotel.id}>
                  {hotel.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
      </Stack>
      <Grid container spacing={3}>
        {items.map((item) => (
          <Grid
            item
            xs={12}
            md={6}
            lg={4}
            key={
              cardType === "room"
                ? (item as Room).roomId
                : (item as City | Hotel).id
            }
          >
            {cardType === "room" ? (
              <RoomCard room={item as Room} size="small" />
            ) : (
              <GenericCard item={item as City | Hotel} type={cardType} />
            )}
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
