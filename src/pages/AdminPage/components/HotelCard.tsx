import { Card, CardContent, CardHeader, Grid, Stack } from "@mui/material";
import StarRating from "../../../components/common/StarRating";
import MapComponent from "../../../components/MapComponent";
import { truncateText } from "../../../services/truncateText";
import { Hotel } from "../entities";

interface HotelCardProps {
  hotel: Hotel;
}

const HotelCard = ({ hotel }: HotelCardProps) => {
  return (
    <Card elevation={3}>
      <CardHeader title={hotel.name} />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={4.5}>
            <Stack gap={1}>
              <StarRating rating={hotel.starRating} />
              {truncateText(hotel.description, 100)}
            </Stack>
          </Grid>
          <Grid item xs={7.5}>
            <MapComponent
              latitude={hotel.latitude}
              longitude={hotel.longitude}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default HotelCard;
