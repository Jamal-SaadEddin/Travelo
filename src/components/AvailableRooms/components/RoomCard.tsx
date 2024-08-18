import ChildCareRoundedIcon from "@mui/icons-material/ChildCareRounded";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import {
  Badge,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import AmenitiesStack from "../../AmenitiesStack";
import { RoomCardProps } from "../enitties/RoomCardProps";

const RoomCard = ({ room }: RoomCardProps) => {
  const theme = useTheme();

  const cardStyles = {
    border: theme.palette.mode === "dark" ? "5px solid #202019" : "none",
  };

  return (
    <Card sx={cardStyles}>
      <CardMedia
        component="img"
        alt="Room image"
        height="320"
        image={room.roomPhotoUrl}
      />

      <CardContent
        sx={{ display: "flex", flexDirection: "column", flexGrow: 1, gap: 2 }}
      >
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
            {room.roomType} Room
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            fontWeight="600"
            color="success.main"
          >
            ${room.price}
            <Typography variant="body2" component="span" color="GrayText">
              /night
            </Typography>
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" color="text.primary">
          <Badge
            sx={{ mr: 2 }}
            badgeContent={room.capacityOfAdults}
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
            badgeContent={room.capacityOfChildren}
            color="info"
          >
            <ChildCareRoundedIcon />
          </Badge>
          <Typography variant="body2" component="span">
            Children
          </Typography>
        </Stack>
        <AmenitiesStack amenities={room.roomAmenities} />
      </CardContent>
      <CardActions sx={{ justifyContent: "center", mt: "auto", pb: 3 }}>
        <Button
          variant="contained"
          size="large"
          fullWidth
          sx={{ fontWeight: 600 }}
        >
          Reserve Room
        </Button>
      </CardActions>
    </Card>
  );
};

export default RoomCard;
