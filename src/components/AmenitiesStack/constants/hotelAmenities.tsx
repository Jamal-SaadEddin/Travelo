import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import PoolIcon from "@mui/icons-material/Pool";
import WifiIcon from "@mui/icons-material/Wifi";
import { Amenity } from "../entities/Amenity";

export const hotelAmenities: Amenity[] = [
  {
    name: "Free Wi-Fi",
    description: "High-speed internet available in all rooms.",
    icon: <WifiIcon />,
  },
  {
    name: "Fitness Center",
    description: "Stay fit with our well-equipped fitness center.",
    icon: <FitnessCenterIcon />,
  },
  {
    name: "Swimming Pool",
    description: "Relax by the poolside and enjoy a refreshing swim.",
    icon: <PoolIcon />,
  },
];
