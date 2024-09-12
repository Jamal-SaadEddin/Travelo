import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import {
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import RoomCard from "@src/components/common/RoomCard";
import RoomDialog from "@src/components/common/RoomDialog";
import { City } from "@src/entities/common/City";
import { AdminHotel, Hotel } from "@src/entities/common/Hotel";
import { Room } from "@src/entities/common/Room";
import { useCities } from "@src/hooks/useCities";
import { useHotels } from "@src/hooks/useHotels";
import { useRooms } from "@src/hooks/useRooms";
import useAdminSearchBarStore from "@src/store/adminSearchBar.store";
import useCurrentPageStore from "@src/store/currentPage.store";
import { useEffect, useState } from "react";
import AdminHotelCard from "./components/AdminHotelCard";
import CityCard from "./components/CityCard";
import CityDialog from "./components/CityDialog";
import HotelDialog from "./components/HotelDialog";
import { renderPaginationButtons } from "./components/PaginationButtons";
import SearchBar from "./components/SearchBar";

const AdminPage = () => {
  const {
    currentPage: pageData,
    currentItems,
    setCurrentItems,
  } = useCurrentPageStore();
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(8);
  const [selectedHotel, setSelectedHotel] = useState<number | null>(-111);
  const todayDate = new Date().toISOString().split("T")[0]; // Format today's date
  const { cityName: city, hotelName } = useAdminSearchBarStore();

  const cityName = city.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
    letter.toUpperCase(),
  ); // This is a simple way to capitalize the first letter of each word

  // Fetching data using custom hooks
  const { data: cities, isLoading: isLoadingCities } = useCities({ cityName });
  const { data: hotelsData, isLoading: isLoadingHotels } = useHotels({
    hotelName,
    currentPage,
    cardsPerPage,
  });
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
  }, [cities, hotels, pageData, rooms, setCurrentItems]);

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
    const newItems = [newCity, ...currentItems];
    setCurrentItems(newItems);
  };
  const handleAddHotel = (newHotel: Hotel) => {
    const newItems = [newHotel, ...currentItems];
    setCurrentItems(newItems);
  };
  const handleAddRoom = (newRoom: Room) => {
    const newItems = [newRoom, ...currentItems];
    setCurrentItems(newItems);
  };

  return (
    <Container maxWidth="xl">
      <Stack
        direction="row"
        justifyContent="right"
        my={5}
        gap={2}
        flexWrap="wrap"
      >
        {pageData !== "rooms" && <SearchBar />}
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
                <MenuItem value={8}>8 hotels per page</MenuItem>
                <MenuItem value={16}>16 hotels per page</MenuItem>
                <MenuItem value={20}>20 hotels per page</MenuItem>
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
        {pageData === "cities" && isLoadingCities
          ? Array.from({ length: 8 }).map((_, index) => (
              <Grid item xs={12} sm={6} md={4} xl={3} key={index}>
                <Skeleton variant="rectangular" height={220} />
              </Grid>
            ))
          : pageData === "hotels" && isLoadingHotels
            ? Array.from({ length: 8 }).map((_, index) => (
                <Grid item xs={12} sm={6} md={4} xl={3} key={index}>
                  <Skeleton variant="rectangular" height={583} />
                </Grid>
              ))
            : pageData === "rooms" && isLoadingRooms
              ? Array.from({ length: 8 }).map((_, index) => (
                  <Grid item xs={12} sm={6} md={4} xl={3} key={index}>
                    <Skeleton variant="rectangular" height={361} />
                  </Grid>
                ))
              : currentItems.length > 0
                ? currentItems.map((item) => (
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={4}
                      xl={3}
                      key={
                        pageData === "rooms"
                          ? (item as Room).roomId
                          : (item as City | AdminHotel).id
                      }
                    >
                      {pageData === "rooms" && "roomId" in item ? (
                        <RoomCard room={item as Room} size="small" editable />
                      ) : pageData === "hotels" && "hotelType" in item ? (
                        <AdminHotelCard hotel={item as Hotel} />
                      ) : pageData === "cities" &&
                        !("roomId" in item || "hotelType" in item) ? (
                        <CityCard city={item as City} />
                      ) : null}
                    </Grid>
                  ))
                : currentItems.length === 0 && (
                    <Grid item xs={12} textAlign="center">
                      <Typography variant="h6">
                        No {pageData} found.
                        <br />
                        <SentimentVeryDissatisfiedIcon
                          sx={{ fontSize: "48px", mt: 1 }}
                        />
                      </Typography>
                    </Grid>
                  )}
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
