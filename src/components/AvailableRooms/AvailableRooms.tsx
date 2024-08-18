import { Grid, Paper, Typography } from "@mui/material";
import RoomCard from "./components/RoomCard";
import { availableRooms } from "./constants/availableRooms";

const AvailableRooms = () => {
  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <Typography variant="h5" sx={{ pb: 2 }}>
        Available Rooms
      </Typography>
      <Grid container spacing={2}>
        {availableRooms.map((room) => (
          <Grid item key={room.roomId} xs={12} md={6}>
            <RoomCard room={room} />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default AvailableRooms;
