import { Divider, Grid, Typography } from "@mui/material";
import useCartStore from "../../../store/cartStore";
import RoomCard from "../../../components/common/RoomCard";

const BookedRooms = () => {
  const bookedRooms = useCartStore((s) => s.bookedRooms);
  const totalPrice = bookedRooms.reduce((acc, room) => acc + room.price!, 0);

  return (
    <>
      <Typography variant="h6" sx={{ pb: 2 }}>
        Your cart ({bookedRooms.length}
        {bookedRooms.length > 1 ? " rooms" : " room"} - {totalPrice} USD)
      </Typography>
      <Grid container spacing={2}>
        {bookedRooms.map((room) => (
          <Grid item xs={12} lg={6} key={room.roomId} position="relative">
            <RoomCard room={room} size="small" />
          </Grid>
        ))}
      </Grid>
      <Divider sx={{ my: 2 }} />
      <Typography variant="h6">
        Total Price (USD): {""}
        <Typography component="span" variant="h6" color="success.main">
          ${totalPrice}
        </Typography>
      </Typography>
    </>
  );
};

export default BookedRooms;
