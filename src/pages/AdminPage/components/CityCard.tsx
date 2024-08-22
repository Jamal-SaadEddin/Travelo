import { Card, CardContent, CardHeader } from "@mui/material";
import { truncateText } from "../../../services/truncateText";
import { City } from "../entities";

interface CityCardProps {
  city: City;
}

const CityCard = ({ city }: CityCardProps) => {
  return (
    <Card elevation={3}>
      <CardHeader title={city.name} />
      <CardContent>{truncateText(city.description, 100)}</CardContent>
    </Card>
  );
};

export default CityCard;
