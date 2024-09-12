import { Grid, Paper, Skeleton, Typography } from "@mui/material";
import RoomCard from "@src/components/common/RoomCard/RoomCard";
import { useHotelPage } from "@src/hooks/useHotelPage";
import useSelectedHotelIdStore from "@src/store/selectedHotelId.store";

const AvailableRooms = () => {
  const selectedHotelId = useSelectedHotelIdStore(
    (state) => state.selectedHotelId,
  );

  const { useHotelAvailableRooms } = useHotelPage(selectedHotelId);
  const { data: availableRooms, isLoading } = useHotelAvailableRooms();

  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      {isLoading ? (
        <Skeleton variant="text" width={200} height={40} sx={{ mb: 2 }} />
      ) : (
        <Typography variant="h5" sx={{ pb: 2 }}>
          Available Rooms
        </Typography>
      )}
      <Grid container spacing={2}>
        {isLoading
          ? Array.from({ length: 2 }).map((_, index) => (
              <Grid item key={index} xs={12} lg={6}>
                <Skeleton variant="rectangular" height={572} />
              </Grid>
            ))
          : availableRooms &&
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
