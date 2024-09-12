import BalconyIcon from "@mui/icons-material/Balcony";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import HikingIcon from "@mui/icons-material/Hiking";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import Spa from "@mui/icons-material/Spa";
import WifiIcon from "@mui/icons-material/Wifi";
import { Amenity } from "@src/entities/common/Amenity";

export const amenities: Amenity[] = [
  {
    id: 1,
    name: "wifi",
    description:
      "Stay connected with complimentary high-speed Wi-Fi available in all rooms.",
    icon: <WifiIcon sx={{ marginRight: 1 }} />,
  },
  {
    id: 2,
    name: "Free Breakfast",
    description: "Complimentary breakfast included.",
    icon: <FastfoodIcon sx={{ marginRight: 1 }} />,
  },
  {
    id: 3,
    name: "Mini Bar",
    description:
      "Unwind with a selection of beverages and snacks from the in-room mini bar.",
    icon: <LocalBarIcon sx={{ marginRight: 1 }} />,
  },
  {
    id: 4,
    name: "Room Service",
    description: "Very Fast room service available.",
    icon: <RoomServiceIcon sx={{ marginRight: 1 }} />,
  },
  {
    id: 5,
    name: "Private Balcony",
    description:
      "Take in breathtaking views from your private balcony, available in select rooms.",
    icon: <BalconyIcon sx={{ marginRight: 1 }} />,
  },
  {
    id: 6,
    name: "Spa Services",
    description: "Relax with in-room spa services.",
    icon: <Spa sx={{ marginRight: 1 }} />,
  },
  {
    id: 7,
    name: "Hiking Trails",
    description: "Access to scenic hiking trails.",
    icon: <HikingIcon sx={{ marginRight: 1 }} />,
  },
];
