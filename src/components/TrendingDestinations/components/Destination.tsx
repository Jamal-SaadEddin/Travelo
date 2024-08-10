import { Box, CardMedia, Typography } from "@mui/material";
import { trendingDestinationStyles } from "../../../styles";
import { DestinationProps } from "../entities/DestinationProps";

const Destination = ({ destination }: DestinationProps) => {
  return (
    <Box sx={trendingDestinationStyles.styledCard}>
      <CardMedia
        component="img"
        src={destination.thumbnailUrl}
        alt={destination.cityName}
        sx={trendingDestinationStyles.styledCardMedia}
      />
      <Typography variant="h5" sx={trendingDestinationStyles.cityName}>
        {destination.cityName}
      </Typography>
    </Box>
  );
};

export default Destination;
