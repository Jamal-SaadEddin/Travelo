import {
  Box,
  Divider,
  Paper,
  Slider,
  Stack,
  ToggleButton,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useStyles } from "../../styles";
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
      <Box my={2}>
        <Typography
          variant="subtitle1"
          color={filterComponentStyles.titleColor}
        >
          Price per night:
        </Typography>
        <Slider
          value={price}
          onChange={handlePriceChange}
          valueLabelDisplay="on"
          step={10}
          marks
          min={100}
          max={180}
          valueLabelFormat={(value) => `$${value}`}
          aria-labelledby="price-slider"
          sx={filterComponentStyles.slider}
        />
      </Box>
      <Divider />
      <Box my={2}>
        <Typography
          variant="subtitle1"
          color={filterComponentStyles.titleColor}
        >
          Star Rating:
        </Typography>
        <Slider
          value={rating}
          onChange={handleRatingChange}
          valueLabelDisplay="on"
          step={1}
          marks
          min={1}
          max={5}
          valueLabelFormat={(value) => `${value} Star${value > 1 ? "s" : ""}`}
          aria-labelledby="star-rating-slider"
          sx={filterComponentStyles.slider}
        />
      </Box>
      <Divider />
      <Box my={2}>
        <Typography
          variant="subtitle1"
          color={filterComponentStyles.titleColor}
        >
          Amenities:
        </Typography>
        <Stack direction="row" gap={1} my={1} flexWrap="wrap">
          {amenities.map((amenity) => (
            <ToggleButton
              key={amenity.id}
              value={amenity.name}
              size="large"
              disableRipple
              selected={selectedAmenities.includes(amenity.name)}
              onChange={() => toggleAmenity(amenity.name)}
              sx={{
                ...filterComponentStyles.toggleButton,
                backgroundColor: selectedAmenities.includes(amenity.name)
                  ? "primary.main"
                  : "",
              }}
            >
              {amenity.icon} {amenity.name}
            </ToggleButton>
          ))}
        </Stack>
      </Box>
      <Divider />
      <Box my={2}>
        <Typography
          variant="subtitle1"
          color={filterComponentStyles.titleColor}
        >
          Room Type:
        </Typography>
        <Stack direction="row" gap={1} my={1} flexWrap="wrap">
          {roomTypes.map((roomType) => (
            <ToggleButton
              key={roomType}
              value={roomType}
              size="large"
              disableRipple
              selected={selectedRoomType.includes(roomType)}
              onChange={() => toggleRoomType(roomType)}
              sx={{
                ...filterComponentStyles.toggleButton,
                backgroundColor: selectedRoomType.includes(roomType)
                  ? "primary.main"
                  : "",
              }}
            >
              {roomType}
            </ToggleButton>
          ))}
        </Stack>
      </Box>
    </Paper>
  );
};

export default FilterComponent;
