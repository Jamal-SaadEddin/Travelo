import ChevronRightIcon from "@mui/icons-material/ChevronRight";
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
import { Room } from "@src/entities/common/Room";
import useCartStore from "@src/store/cartStore";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import AmenitiesStack from "../AmenitiesStack";
import DeleteDialog from "../DeleteDialog";
import RoomDialog from "../RoomDialog";

export interface RoomCardProps {
  room: Room;
  size?: "small" | "medium";
  editable?: boolean;
}

const RoomCard = ({
  room,
  size = "medium",
  editable = false,
}: RoomCardProps) => {
  const [currentRoom, setCurrentRoom] = useState<Room>(room);
  const bookedRooms = useCartStore((s) => s.bookedRooms);
  const setBookedRooms = useCartStore((s) => s.setBookedRooms);

  const theme = useTheme();
  const navigate = useNavigate();

  const styles = {
    card: {
      border: theme.palette.mode === "dark" ? "5px solid #202019" : "none",
      height: "100%",
    },
    removeFromCartButton: {
      position: "absolute",
      top: 5,
      right: -10,
      zIndex: 999,
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
    toast.success(
      (t) => (
        <Stack direction="row" alignItems="center">
          <Typography variant="body1" color="text.primary">
            Finish you booking
          </Typography>
          <IconButton
            onClick={() => {
              navigate("/checkout");
              toast.dismiss(t.id);
            }}
            color="success"
          >
            <ChevronRightIcon />
          </IconButton>
        </Stack>
      ),
      { duration: 3000 },
    );
  };

  const handleCancelBooking = () => {
    const newBookedRooms = bookedRooms.filter(
      (bookedRoom) => bookedRoom.roomId !== currentRoom.roomId,
    );
    setBookedRooms(newBookedRooms);
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
          <Stack direction="row" spacing={2} justifyContent="center">
            <RoomDialog
              type="update"
              room={currentRoom}
              onSubmit={handleUpdate}
            />
            <DeleteDialog
              type="room"
              id={currentRoom.roomId} // ID of the room to delete
              hotelId={1} // ID of the hotel that contains the room
              name={currentRoom.roomType} // Name of the room
            />
          </Stack>
        )}
      </CardContent>
      {size !== "small" && (
        <CardActions sx={{ justifyContent: "center", mt: "auto", pb: 3 }}>
          <Button
            variant={
              bookedRooms.filter((room) => room.roomId === currentRoom.roomId)
                .length > 0
                ? "outlined"
                : "contained"
            }
            color={
              bookedRooms.filter((room) => room.roomId === currentRoom.roomId)
                .length > 0
                ? "error"
                : "primary"
            }
            size="large"
            fullWidth
            sx={{ fontWeight: 600 }}
            onClick={
              bookedRooms.filter((room) => room.roomId === currentRoom.roomId)
                .length > 0
                ? handleCancelBooking
                : handleBookRoom
            }
          >
            {bookedRooms.filter((room) => room.roomId === currentRoom.roomId)
              .length > 0
              ? "Cancel Booking"
              : "Book Room"}
          </Button>
        </CardActions>
      )}
    </Card>
  );
};

export default RoomCard;
