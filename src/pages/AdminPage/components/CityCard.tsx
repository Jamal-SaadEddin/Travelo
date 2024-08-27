import {
  Card,
  CardContent,
  CardHeader,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { truncateText } from "../../../services/truncateText";
import { City } from "../entities";
import UpdateCityDialog from "./UpdateCityDialog";

interface CityCardProps {
  city: City;
}

const CityCard = ({ city }: CityCardProps) => {
  const [currentCity, setCurrentCity] = useState<City>(city);

  const handleUpdate = (updatedCity: City) => {
    setCurrentCity(updatedCity);
  };

  return (
    <Card elevation={3}>
      <CardHeader title={currentCity.name} />
      <CardContent>
        <Typography>{truncateText(currentCity.description, 100)}</Typography>
        <Stack direction="row" spacing={2} justifyContent="right">
          <UpdateCityDialog city={city} onUpdate={handleUpdate} />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CityCard;
