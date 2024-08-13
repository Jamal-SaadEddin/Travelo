import { Divider, Paper, Typography } from "@mui/material";
import { useState } from "react";
import { useStyles } from "../../styles";
import SliderComponent from "./components/SliderComponent";
import ToggleButtonsGroup from "./components/ToggleButtonsGroup";
import { amenities } from "./constants/amenities";
import { roomTypes } from "./constants/roomTypes";

const FilterComponent = () => {
  const { filterComponentStyles } = useStyles();

  const [price, setPrice] = useState<number[]>([100, 180]);
  const [rating, setRating] = useState<number[]>([1, 5]);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [selectedRoomType, setSelectedRoomType] = useState<string[]>([]);

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
    <Paper elevation={3} sx={filterComponentStyles.paper}>
      <Typography variant="h6" gutterBottom>
        Filter by:
      </Typography>
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
    </Paper>
  );
};

export default FilterComponent;
