import { Card, CardContent, CardHeader, Grid, Stack } from "@mui/material";
import { useState } from "react";
import StarRating from "../../../components/common/StarRating";
import MapComponent from "../../../components/MapComponent";
import { truncateText } from "../../../services/truncateText";
import { Hotel } from "../entities";
import UpdateHotelDialog from "./UpdateHotelDialog";

interface HotelCardProps {
  hotel: Hotel;
}

const HotelCard = ({ hotel }: HotelCardProps) => {
  const [currentHotel, setCurrentHotel] = useState<Hotel>(hotel);

  const handleUpdate = (updatedHotel: Hotel) => {
    setCurrentHotel(updatedHotel);
  };

  return (
    <Card elevation={3}>
      <CardHeader title={currentHotel.name} />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={4.5}>
            <Stack gap={1}>
              <StarRating rating={currentHotel.starRating} />
              {truncateText(currentHotel.description, 100)}
            </Stack>
          </Grid>
          <Grid item xs={7.5}>
            <MapComponent
              latitude={currentHotel.latitude}
              longitude={currentHotel.longitude}
            />
          </Grid>
          <Grid item xs={12}>
            <Stack direction="row" spacing={2} justifyContent="right">
              <UpdateHotelDialog hotel={currentHotel} onUpdate={handleUpdate} />
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default HotelCard;
