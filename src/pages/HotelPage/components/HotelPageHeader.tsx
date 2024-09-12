import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  Skeleton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import StarRating from "@src/components/common/StarRating";

interface HotelPageHeaderProps {
  hotelName: string;
  location: string;
  starRating: number;
  isLoading: boolean;
}

const HotelPageHeader = ({
  hotelName,
  location,
  starRating,
  isLoading,
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
        {isLoading ? (
          <Skeleton
            variant="text"
            width={isXSmallScreen ? 175 : 300}
            height={isXSmallScreen ? 42 : 72}
          />
        ) : (
          <Typography variant={isXSmallScreen ? "h4" : "h2"}>
            {hotelName}
          </Typography>
        )}
        <Stack direction="row" alignItems="center" gap={1}>
          {isLoading ? (
            <Skeleton variant="text" width={142} height={28} />
          ) : (
            <>
              <LocationOnIcon />
              <Typography variant="subtitle1">{location}</Typography>
            </>
          )}
        </Stack>
      </Stack>
      {isLoading ? (
        <Skeleton variant="rectangular" width={175} height={35} />
      ) : (
        <StarRating rating={starRating} large={!isXSmallScreen} />
      )}
    </Stack>
  );
};

export default HotelPageHeader;
