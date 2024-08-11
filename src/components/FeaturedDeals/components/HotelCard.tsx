import HotelIcon from "@mui/icons-material/Hotel";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Stack } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { HotelCardProps } from "../entities/HotelCardProps";
import { truncateText } from "../services/truncateText";
import { cardStyles } from "../styles";
import StarRating from "./StarRating";

const HotelCard = ({ hotel }: HotelCardProps) => {
  return (
    <Card sx={cardStyles}>
      <CardMedia
        component="img"
        alt={hotel.hotelName + " image"}
        height="220"
        image={hotel.roomPhotoUrl}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {hotel.title}
        </Typography>
        <Typography variant="body2">
          {truncateText(hotel.description, 150)}
        </Typography>
        <Stack direction="column" gap={1}>
          <Stack direction="row" justifyContent="space-between" pt={2}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              gap={1}
            >
              <LocationOnIcon />
              <Typography variant="body1">{hotel.cityName}</Typography>
            </Stack>
            <StarRating value={hotel.hotelStarRating} />
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              gap={1}
            >
              <HotelIcon />
              <Typography variant="body1">{hotel.hotelName}</Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between" gap={1}>
              <Typography
                variant="overline"
                color="error.main"
                sx={{ textDecoration: "line-through" }}
              >
                ${hotel.originalRoomPrice}
              </Typography>
              <Typography variant="subtitle1" color="success.main">
                ${hotel.finalPrice}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </CardContent>
      <CardActions sx={{ justifyContent: "center", mt: "auto" }}>
        <Button variant="contained">Show more details</Button>
      </CardActions>
    </Card>
  );
};

export default HotelCard;
