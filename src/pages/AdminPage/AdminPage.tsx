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
import { useEffect, useState } from "react";
import RoomCard from "../../components/AvailableRooms/components/RoomCard";
import SearchBar from "../../components/SearchBar";
import { Room } from "../../entities/Room";
import { useCities } from "../../hooks/useCities";
import { useHotels } from "../../hooks/useHotels";
import { useRooms } from "../../hooks/useRooms";
import useCurrentPageStore from "../../store/currentPage.store";
import CityCard from "./components/CityCard";
import CityDialog from "./components/CityDialog";
import HotelCard from "./components/HotelCard";
import HotelDialog from "./components/HotelDialog";
import { renderPaginationButtons } from "./components/PaginationButtons";
import RoomDialog from "./components/RoomDialog";
import { City, Hotel } from "./entities";

const AdminPage = () => {
  const pageData = useCurrentPageStore((state) => state.currentPage);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(9);
  const [selectedHotel, setSelectedHotel] = useState<number | null>(-111);
  const todayDate = new Date().toISOString().split("T")[0]; // Format today's date

  // Fetching data using custom hooks
  const { data: cities, isLoading: isLoadingCities } = useCities();
  const { data: hotelsData, isLoading: isLoadingHotels } = useHotels(
    currentPage,
    cardsPerPage,
  );
  const hotels = hotelsData?.data;
  const totalPages = hotelsData?.totalPages || 1;
  const { data: rooms, isLoading: isLoadingRooms } = useRooms(
    selectedHotel,
    todayDate,
  );

  // Set the selected hotel by default to the first one if it's available
  if (pageData === "rooms" && hotels?.length && selectedHotel === -111) {
    setSelectedHotel(hotels[0].id!);
  }

  useEffect(() => {
    // Determine the items to display based on pageData
    if (pageData === "cities") {
      setCurrentItems(cities || []);
      return;
    }
    if (pageData === "hotels") {
      setCurrentItems(hotels || []);
      return;
    }
    if (pageData === "rooms") {
      setCurrentItems(rooms || []);
      return;
    }
  }, [cities, hotels, pageData, rooms]);

  const [currentItems, setCurrentItems] = useState<(City | Hotel | Room)[]>([]);

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

  const handleAddCity = (newCity: City) => {
    const newItems = [...currentItems, newCity];
    setCurrentItems(newItems);
  };
  const handleAddHotel = (newHotel: Hotel) => {
    const newItems = [...currentItems, newHotel];
    setCurrentItems(newItems);
  };
  const handleAddRoom = (newRoom: Room) => {
    const newItems = [...currentItems, newRoom];
    setCurrentItems(newItems);
  };

  if (isLoadingCities || isLoadingHotels || isLoadingRooms) {
    return <div>Loading...</div>;
  }

  return (
    <Container maxWidth="xl">
      <Stack direction="row" my={5} gap={2} flexWrap="wrap">
        <SearchBar />
        <Stack direction="row" justifyContent="right" spacing={2}>
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
              <InputLabel>Hotels per page</InputLabel>
              <Select
                label="Hotels per page"
                value={cardsPerPage.toString()}
                onChange={handleSelectChange}
              >
                <MenuItem value={9}>9 hotels per page</MenuItem>
                <MenuItem value={18}>18 hotels per page</MenuItem>
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
      </Stack>
      <Grid container spacing={3}>
        {currentItems &&
          currentItems.map((item) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              xl={3}
              key={
                pageData === "rooms"
                  ? (item as Room).roomId
                  : (item as City | Hotel).id
              }
            >
              {pageData === "rooms" && "roomId" in item ? (
                <RoomCard room={item as Room} size="small" editable />
              ) : pageData === "hotels" && "hotelType" in item ? (
                <HotelCard hotel={item as Hotel} />
              ) : pageData === "cities" &&
                !("roomId" in item || "hotelType" in item) ? (
                <CityCard city={item as City} />
              ) : null}
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
