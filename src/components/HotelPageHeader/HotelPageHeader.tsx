import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import StarRating from "../common/StarRating";
import { HotelPageHeaderProps } from "./entities/HotelPageHeaderProps";

const HotelPageHeader = ({
  hotelName,
  location,
  starRating,
}: HotelPageHeaderProps) => {
  const theme = useTheme();
  const isXSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Stack
      direction={{ xs: "column-reverse", sm: "row" }}
      spacing={1}
      justifyContent="space-between"
      alignItems={{ xs: "flex-start", sm: "center" }}
    >
      <Stack spacing={1}>
        <Typography variant={isXSmallScreen ? "h4" : "h2"}>
          {hotelName}
        </Typography>
        <Stack direction="row" alignItems="center" gap={1}>
          <LocationOnIcon />
          <Typography variant="subtitle1">{location}</Typography>
        </Stack>
      </Stack>
      <StarRating rating={starRating} large={!isXSmallScreen} />
    </Stack>
  );
};

export default HotelPageHeader;
