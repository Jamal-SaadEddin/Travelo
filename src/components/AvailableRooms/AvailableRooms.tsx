import { Grid, Paper, Typography } from "@mui/material";
import { useHotelPage } from "../../hooks/useHotelPage";
import useSelectedHotelIdStore from "../../store/selectedHotelId.store";
import RoomCard from "./components/RoomCard";

const AvailableRooms = () => {
  const selectedHotelId = useSelectedHotelIdStore(
    (state) => state.selectedHotelId,
  );

  const { useHotelAvailableRooms } = useHotelPage(selectedHotelId);
  const { data: availableRooms, isLoading } = useHotelAvailableRooms();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <Typography variant="h5" sx={{ pb: 2 }}>
        Available Rooms
      </Typography>
      <Grid container spacing={2}>
        {availableRooms &&
          availableRooms.map((room) => (
            <Grid item key={room.roomId} xs={12} lg={6}>
              <RoomCard room={room} />
            </Grid>
          ))}
      </Grid>
    </Paper>
  );
};

export default AvailableRooms;
