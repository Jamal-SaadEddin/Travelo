import ChildCareRoundedIcon from "@mui/icons-material/ChildCareRounded";
import CloseIcon from "@mui/icons-material/Close";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import {
  Badge,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  IconButton,
  Stack,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { Room } from "../../../entities";
import UpdateRoomDialog from "../../../pages/AdminPage/components/UpdateRoomDialog";
import AmenitiesStack from "../../AmenitiesStack";
import { RoomCardProps } from "../enitties/RoomCardProps";
import useCartStore from "./../../../store/cartStore";

const RoomCard = ({
  room,
  size = "medium",
  editable = false,
}: RoomCardProps) => {
  const [currentRoom, setCurrentRoom] = useState<Room>(room);
  const bookedRooms = useCartStore((s) => s.bookedRooms);
  const setBookedRooms = useCartStore((s) => s.setBookedRooms);

  const theme = useTheme();

  const styles = {
    card: {
      border: theme.palette.mode === "dark" ? "5px solid #202019" : "none",
      height: "100%",
    },
    removeFromCartButton: {
      position: "absolute",
      top: 5,
      right: -10,
      zIndex: 1000,
      color: "white",
      bgcolor: "error.main",
      p: 0.5,
      "&:hover": {
        bgcolor: "error.dark",
      },
    },
  };

  const handleBookRoom = () => {
    const newBookedRooms = [currentRoom, ...bookedRooms];
    setBookedRooms(newBookedRooms);

    // alert("Room booked!");
  };

  const handleCancelBooking = () => {
    const newBookedRooms = bookedRooms.filter(
      (bookedRoom) => bookedRoom !== currentRoom,
    );
    setBookedRooms(newBookedRooms);

    // alert("Booking canceled!");
  };

  const handleUpdate = (updatedRoom: Room) => {
    setCurrentRoom(updatedRoom);
  };

  return (
    <Card sx={styles.card}>
      {bookedRooms.includes(currentRoom) && size === "small" && (
        <IconButton
          sx={styles.removeFromCartButton}
          disableRipple
          onClick={handleCancelBooking}
        >
          <Tooltip title="Remove from Cart" arrow placement="top">
            <CloseIcon fontSize="small" />
          </Tooltip>
        </IconButton>
      )}
      <CardMedia
        component="img"
        alt="Room image"
        height={size === "small" ? 140 : 320}
        image={currentRoom.roomPhotoUrl}
      />
      <CardContent
        sx={{ display: "flex", flexDirection: "column", flexGrow: 1, gap: 2 }}
      >
        <Stack direction="row" justifyContent="space-between">
          <Typography
            variant={size === "small" ? "h6" : "h5"}
            gutterBottom
            sx={{ fontWeight: size !== "small" ? 600 : 400 }}
          >
            {currentRoom.roomType} Room
          </Typography>
          <Typography
            variant={size === "small" ? "subtitle1" : "h6"}
            gutterBottom
            fontWeight="600"
            color="success.main"
          >
            ${currentRoom.price}
            <Typography variant="body2" component="span" color="GrayText">
              /night
            </Typography>
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" color="text.primary">
          <Badge
            sx={{ mr: 2 }}
            badgeContent={currentRoom.capacityOfAdults}
            color="info"
          >
            <PersonOutlineRoundedIcon />
          </Badge>
          <Typography variant="body2" component="span">
            Adults
          </Typography>
          <Divider sx={{ marginInline: 1 }} orientation="vertical" flexItem />
          <Badge
            sx={{ mr: 2 }}
            badgeContent={currentRoom.capacityOfChildren}
            color="info"
          >
            <ChildCareRoundedIcon />
          </Badge>
          <Typography variant="body2" component="span">
            Children
          </Typography>
        </Stack>
        <AmenitiesStack
          amenities={currentRoom.roomAmenities}
          amenitySize={size}
        />
        {editable && (
          <Stack direction="row" spacing={2} justifyContent="right">
            <UpdateRoomDialog room={currentRoom} onUpdate={handleUpdate} />
          </Stack>
        )}
      </CardContent>
      {size !== "small" && (
        <CardActions sx={{ justifyContent: "center", mt: "auto", pb: 3 }}>
          <Button
            variant={
              bookedRooms.includes(currentRoom) ? "outlined" : "contained"
            }
            color={bookedRooms.includes(currentRoom) ? "error" : "primary"}
            size="large"
            fullWidth
            sx={{ fontWeight: 600 }}
            onClick={
              bookedRooms.includes(currentRoom)
                ? handleCancelBooking
                : handleBookRoom
            }
          >
            {bookedRooms.includes(currentRoom) ? "Cancel Booking" : "Book Room"}
          </Button>
        </CardActions>
      )}
    </Card>
  );
};

export default RoomCard;
