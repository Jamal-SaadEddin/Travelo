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
import { Navigate } from "react-router-dom";
import RoomCard from "../../components/AvailableRooms/components/RoomCard";
import SearchBar from "../../components/SearchBar";
import { Room } from "../../entities";
import { user } from "../../hooks/useAuth";
import CityDialog from "./components/CityDialog";
import GenericCard from "./components/GenericCard";
import HotelDialog from "./components/HotelDialog";
import { renderPaginationButtons } from "./components/PaginationButtons";
import RoomDialog from "./components/RoomDialog";
import { City, Hotel } from "./entities";

const baseApiUrl = import.meta.env.VITE_BASE_API_URL;

const AdminPage = ({ dataType }: { dataType: "hotel" | "city" | "room" }) => {
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

    if (dataType === "room") {
      fetchHotels();
    }
  }, [dataType]);

  useEffect(() => {
    const fetchData = async () => {
      let apiUrl: string;

      if (dataType === "hotel") {
        apiUrl = `${baseApiUrl}/hotels?pageSize=${cardsPerPage}&pageNumber=${currentPage}`;
        const response = await axios.get(apiUrl);
        setItems(response.data);
        const pagination = JSON.parse(response.headers["x-pagination"]);
        setTotalPages(pagination.TotalPageCount);
      } else if (dataType === "city") {
        apiUrl = `${baseApiUrl}/cities`;
        const response = await axios.get(apiUrl);
        setItems(response.data);
        setTotalPages(1); // No pagination for cities
      } else if (dataType === "room" && selectedHotel) {
        apiUrl = `${baseApiUrl}/hotels/${selectedHotel}/rooms?checkInDate=${todayDate}&checkOutDate=${todayDate}`;
        const response = await axios.get(apiUrl);
        setItems(response.data);
        setTotalPages(1); // Assuming no pagination needed for rooms
      }
    };

    fetchData();
  }, [dataType, currentPage, cardsPerPage, selectedHotel, todayDate]);

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

  if (user.type !== "admin") {
    return <Navigate to="/not-found" />;
  }

  return (
    <Container maxWidth="lg">
      <SearchBar />
      <Stack direction="row" justifyContent="right" my={3} spacing={2}>
        {dataType === "city" && (
          <CityDialog type="add" onSubmit={handleAddCity} />
        )}
        {dataType === "hotel" && (
          <HotelDialog type="add" onSubmit={handleAddHotel} />
        )}
        {dataType === "room" && (
          <RoomDialog
            type="add"
            onSubmit={handleAddRoom}
            selectedHotel={selectedHotel}
            hotels={hotels}
          />
        )}
        {dataType === "hotel" && totalPages > 1 && (
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

        {dataType === "room" && hotels.length > 0 && (
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
              dataType === "room"
                ? (item as Room).roomId
                : (item as City | Hotel).id
            }
          >
            {dataType === "room" ? (
              <RoomCard room={item as Room} size="small" editable />
            ) : (
              <GenericCard item={item as City | Hotel} type={dataType} />
            )}
          </Grid>
        ))}
      </Grid>
      {dataType === "hotel" && (
        <Stack direction="row" justifyContent="center" mt={3}>
          {renderPaginationButtons({ currentPage, totalPages, handleClick })}
        </Stack>
      )}
    </Container>
  );
};

export default AdminPage;
