import { Card, CardContent, CardHeader, Grid, Stack } from "@mui/material";
import { useState } from "react";
import StarRating from "../../../components/common/StarRating";
import MapComponent from "../../../components/common/MapComponent";
import { truncateText } from "../../../services/truncateText";
import DeleteDialog from "../../../components/common/DeleteDialog";
import HotelDialog from "./HotelDialog";
import { AdminHotel, Hotel } from "../../../entities/common/Hotel";

interface HotelCardProps {
  hotel: Hotel;
}

const AdminHotelCard = ({ hotel }: HotelCardProps) => {
  const [currentHotel, setCurrentHotel] = useState<AdminHotel>(
    hotel as AdminHotel,
  );

  const handleUpdate = (updatedHotel: AdminHotel) => {
    setCurrentHotel(updatedHotel);
  };

  return (
    <Card elevation={3}>
      <CardHeader title={currentHotel.name} />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Stack gap={1}>
              <StarRating rating={currentHotel.starRating as number} />
              {truncateText(currentHotel.description, 100)}
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <MapComponent
              latitude={currentHotel.latitude as number}
              longitude={currentHotel.longitude as number}
            />
          </Grid>
          <Grid item xs={12}>
            <Stack direction="row" spacing={2} justifyContent="center">
              <HotelDialog
                type="update"
                hotel={currentHotel}
                onSubmit={handleUpdate}
              />
              <DeleteDialog
                type="hotel"
                id={currentHotel.id!} // ID of the hotel to delete
                cityId={1} // ID of the city that contains the hotel
                name={currentHotel.name} // Name of the hotel
              />
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default AdminHotelCard;
