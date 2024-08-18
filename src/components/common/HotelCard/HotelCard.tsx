import HotelIcon from "@mui/icons-material/Hotel";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Stack } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { SxProps } from "@mui/system";
import { truncateText } from "../../../services/truncateText";
import { useStyles } from "../../../styles";
import StarRating from "../StarRating";
import { HotelCardProps } from "./entities/HotelCardProps";
import {
  isFeaturedDealHotel,
  isRecentlyVisitedHotel,
} from "./utils/typeGuards";

const HotelCard = ({ hotel }: HotelCardProps) => {
  const { hotelCardsStyles, featuredDealStyles, recentlyVisitedHotelStyles } =
    useStyles();

  const dynamicCardStyles: SxProps = {
    ...hotelCardsStyles.cardStyles,
    width: isRecentlyVisitedHotel(hotel)
      ? recentlyVisitedHotelStyles.cardWidth
      : featuredDealStyles.cardWidth,
  };

  return (
    <Card sx={dynamicCardStyles}>
      <CardMedia
        component="img"
        alt={`${hotel.hotelName} image`}
        height="220"
        image={
          isFeaturedDealHotel(hotel) ? hotel.roomPhotoUrl : hotel.thumbnailUrl
        }
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {isFeaturedDealHotel(hotel) ? hotel.title : hotel.hotelName}
        </Typography>
        {isFeaturedDealHotel(hotel) && (
          <Typography variant="body2">
            {truncateText(hotel.description, 150)}
          </Typography>
        )}
        <Stack direction="column" gap={1} pt={1}>
          <Stack direction="row" justifyContent="space-between">
            <Stack direction="row" alignItems="center" gap={1}>
              <LocationOnIcon />
              <Typography variant="body1">{hotel.cityName}</Typography>
            </Stack>
            <StarRating
              value={
                isFeaturedDealHotel(hotel)
                  ? hotel.hotelStarRating
                  : hotel.starRating
              }
            />
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            {isFeaturedDealHotel(hotel) && (
              <Stack direction="row" alignItems="center" gap={1}>
                <HotelIcon />
                <Typography variant="body1">{hotel.hotelName}</Typography>
              </Stack>
            )}
            <Stack direction="row" alignItems="center" gap={1}>
              {isFeaturedDealHotel(hotel) ? (
                <>
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
                </>
              ) : (
                <>
                  <Typography variant="subtitle1" color="success.main">
                    ${hotel.priceLowerBound}
                  </Typography>
                  <Typography variant="subtitle1" color="text.primary">
                    -
                  </Typography>
                  <Typography variant="subtitle1" color="error.main">
                    ${hotel.priceUpperBound}
                  </Typography>
                </>
              )}
            </Stack>
          </Stack>
          {isRecentlyVisitedHotel(hotel) && (
            <Typography variant="body2" color="text.secondary">
              Visited on: {new Date(hotel.visitDate).toLocaleDateString()}
            </Typography>
          )}
        </Stack>
      </CardContent>
      {isFeaturedDealHotel(hotel) && (
        <CardActions sx={{ justifyContent: "center", mt: "auto", pb: 3 }}>
          <Button variant="contained">Show more details</Button>
        </CardActions>
      )}
    </Card>
  );
};

export default HotelCard;
