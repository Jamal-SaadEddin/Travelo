import { Card, CardContent, CardHeader, Grid, Stack } from "@mui/material";
import DeleteDialog from "@src/components/common/DeleteDialog";
import MapComponent from "@src/components/common/MapComponent";
import StarRating from "@src/components/common/StarRating";
import { AdminHotel, Hotel } from "@src/entities/common/Hotel";
import { truncateText } from "@src/services/truncateText";
import { useState } from "react";
import HotelDialog from "./HotelDialog";

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
