import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useSearchHotels } from "../../hooks/useSearchHotels";
import useSearchBoxStore from "../../store/searchBoxStore";
import { useStyles } from "../../styles";
import { ListingHotel } from "../common/HotelCard/entities/Hotel";
import SliderComponent from "./components/SliderComponent";
import ToggleButtonsGroup from "./components/ToggleButtonsGroup";
import { amenities } from "./constants/amenities";
import { roomTypes } from "./constants/roomTypes";
import useFilteredHotelsStore from "./store/filteredHotelsStore";
import { filterHotels } from "./utils/filterHotels";

const FilterComponent = () => {
  const { filterComponentStyles } = useStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const searchQueries = useSearchBoxStore((state) => state.searchQueries);
  const query = {
    checkInDate: searchQueries.checkIn.format("YYYY-MM-DD"),
    checkOutDate: searchQueries.checkOut.format("YYYY-MM-DD"),
    city: searchQueries.cityName,
    adults: searchQueries.adults,
    children: searchQueries.children,
    numberOfRooms: searchQueries.rooms,
  };
  const { data: hotels } = useSearchHotels(query);
  const { setFilteredHotels } = useFilteredHotelsStore();

  const [price, setPrice] = useState<number[]>([100, 180]);
  const [rating, setRating] = useState<number[]>([1, 5]);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [selectedRoomType, setSelectedRoomType] = useState<string[]>([]);

  // Apply filters whenever any of the filter states change
  useEffect(() => {
    const applyFilters = () =>
      filterHotels(hotels as ListingHotel[], {
        price,
        rating,
        selectedAmenities,
        selectedRoomType,
      });

    if (hotels) setFilteredHotels(applyFilters());
  }, [
    hotels,
    price,
    rating,
    selectedAmenities,
    selectedRoomType,
    setFilteredHotels,
  ]);

  const handlePriceChange = (_event: Event, newValue: number | number[]) => {
    setPrice(newValue as number[]);
  };

  const handleRatingChange = (_event: Event, newValue: number | number[]) => {
    setRating(newValue as number[]);
  };

  const toggleAmenity = (amenity: string) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((item) => item !== amenity)
        : [...prev, amenity],
    );
  };

  const toggleRoomType = (roomType: string) => {
    setSelectedRoomType((prev) =>
      prev.includes(roomType)
        ? prev.filter((item) => item !== roomType)
        : [...prev, roomType],
    );
  };

  return (
    <Accordion
      elevation={3}
      sx={filterComponentStyles.paper}
      defaultExpanded={isSmallScreen ? false : true}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Typography variant="h5">Filter Results:</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Divider />
        <SliderComponent
          title="Price per night:"
          value={price}
          handleValueChange={handlePriceChange}
          steps={10}
          minValue={100}
          maxValue={180}
          valueLabelFormat={(value) => `$${value}`}
          ariaLabelledBy="price-slider"
        />
        <Divider />
        <SliderComponent
          title="Star Rating:"
          value={rating}
          handleValueChange={handleRatingChange}
          steps={1}
          minValue={1}
          maxValue={5}
          valueLabelFormat={(value) => `${value} Star${value > 1 ? "s" : ""}`}
          ariaLabelledBy="star-rating-slider"
        />
        <Divider />
        <ToggleButtonsGroup
          title="Amenities:"
          buttons={amenities}
          selectedButtons={selectedAmenities}
          toggleButton={toggleAmenity}
        />
        <Divider />
        <ToggleButtonsGroup
          title="Room Type:"
          buttons={roomTypes}
          selectedButtons={selectedRoomType}
          toggleButton={toggleRoomType}
        />
      </AccordionDetails>
    </Accordion>
  );
};

export default FilterComponent;
