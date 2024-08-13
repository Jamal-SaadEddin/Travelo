import { Amenity } from "../entities/Amenity";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import BalconyIcon from "@mui/icons-material/Balcony";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import TvIcon from "@mui/icons-material/Tv";
import WifiIcon from "@mui/icons-material/Wifi";

export const amenities: Amenity[] = [
  {
    id: 1,
    name: "Free Wi-Fi",
    description:
      "Stay connected with complimentary high-speed Wi-Fi available in all rooms.",
    icon: <WifiIcon sx={{ marginRight: 1 }} />,
  },
  {
    id: 2,
    name: "Air Conditioning",
    description:
      "Enjoy a comfortable stay with individually controlled air conditioning in every room.",
    icon: <AcUnitIcon sx={{ marginRight: 1 }} />,
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
    name: "Flat-screen TV",
    description:
      "Relax and enjoy your favorite shows or movies on a modern flat-screen TV.",
    icon: <TvIcon sx={{ marginRight: 1 }} />,
  },
  {
    id: 5,
    name: "Private Balcony",
    description:
      "Take in breathtaking views from your private balcony, available in select rooms.",
    icon: <BalconyIcon sx={{ marginRight: 1 }} />,
  },
];
