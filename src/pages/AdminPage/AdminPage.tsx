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
import RoomCard from "../../components/AvailableRooms/components/RoomCard";
import SearchBar from "../../components/SearchBar";
import { Room } from "../../entities/Room";
import { useCities } from "../../hooks/useCities";
import { useHotels } from "../../hooks/useHotels";
import { useRooms } from "../../hooks/useRooms";
import useCurrentPageStore from "../../store/currentPage.store";
import CityDialog from "./components/CityDialog";
import GenericCard from "./components/GenericCard";
import HotelDialog from "./components/HotelDialog";
import { renderPaginationButtons } from "./components/PaginationButtons";
import RoomDialog from "./components/RoomDialog";
import { City, Hotel } from "./entities";

const AdminPage = () => {
  const pageData = useCurrentPageStore((state) => state.currentPage);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(9);
  const [selectedHotel, setSelectedHotel] = useState<number | null>(139);
  const todayDate = new Date().toISOString().split("T")[0]; // Format today's date

  // Fetching data using custom hooks
  const { data: cities } = useCities();
  const { data: hotelsData } = useHotels(currentPage, cardsPerPage);
  const hotels = hotelsData?.data;
  const totalPages = hotelsData?.totalPages || 1;
  const { data: rooms } = useRooms(selectedHotel, todayDate);
  // Set the selected hotel by default to the first one if it's available
  if (pageData === "rooms" && hotels?.length && selectedHotel === null) {
    setSelectedHotel(hotels[0].id!);
  }

  // Determine the items to display based on pageData
  let items: (City | Hotel | Room)[] =
    pageData === "cities"
      ? cities!
      : pageData === "hotels"
        ? hotels!
        : pageData === "rooms"
          ? rooms!
          : [];

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

  const handleAddCity = (newCity: City) => (items = [...items, newCity]);
  const handleAddHotel = (newHotel: Hotel) => (items = [...items, newHotel]);
  const handleAddRoom = (newRoom: Room) => (items = [...items, newRoom]);

  return (
    <Container maxWidth="lg">
      <SearchBar />
      <Stack direction="row" justifyContent="right" my={3} spacing={2}>
        {pageData === "cities" && (
          <CityDialog type="add" onSubmit={handleAddCity} />
        )}
        {pageData === "hotels" && (
          <HotelDialog type="add" onSubmit={handleAddHotel} />
        )}
        {pageData === "rooms" && (
          <RoomDialog
            type="add"
            onSubmit={handleAddRoom}
            selectedHotel={selectedHotel}
            hotels={hotels || []}
          />
        )}
        {pageData === "hotels" && totalPages > 1 && (
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

        {pageData === "rooms" && (hotels?.length as number) > 0 && (
          <FormControl sx={{ minWidth: "100px" }}>
            <InputLabel>Hotel</InputLabel>
            <Select
              label="Hotel"
              value={selectedHotel?.toString() || ""}
              onChange={handleHotelChange}
            >
              {hotels?.map((hotel) => (
                <MenuItem key={hotel.id} value={hotel.id}>
                  {hotel.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
      </Stack>
      <Grid container spacing={3}>
        {items &&
          items.map((item) => (
            <Grid
              item
              xs={12}
              md={6}
              lg={4}
              key={
                pageData === "rooms"
                  ? (item as Room).roomId
                  : (item as City | Hotel).id
              }
            >
              {pageData === "rooms" ? (
                <RoomCard room={item as Room} size="small" editable />
              ) : pageData === "hotels" ? (
                <GenericCard item={item as City | Hotel} type="hotel" />
              ) : (
                <GenericCard item={item as City | Hotel} type="city" />
              )}
            </Grid>
          ))}
      </Grid>
      {pageData === "hotels" && (
        <Stack direction="row" justifyContent="center" mt={3}>
          {renderPaginationButtons({ currentPage, totalPages, handleClick })}
        </Stack>
      )}
    </Container>
  );
};

export default AdminPage;
