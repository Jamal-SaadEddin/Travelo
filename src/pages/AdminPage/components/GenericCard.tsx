import { FC } from "react";
import HotelCard from "./HotelCard";
import CityCard from "./CityCard";
import { City, Hotel } from "../entities";

type CardType = "hotel" | "city";

interface GenericCardProps {
  item: City | Hotel; // Define a more specific type based on your hotel/city data
  type: CardType;
}

const GenericCard: FC<GenericCardProps> = ({ item, type }) => {
  if (type === "hotel") {
    return <HotelCard hotel={item as Hotel} />;
  }
  return <CityCard city={item as City} />;
};

export default GenericCard;
