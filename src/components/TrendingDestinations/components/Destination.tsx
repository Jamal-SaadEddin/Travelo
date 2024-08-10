import { Box, CardMedia, Typography } from "@mui/material";
import { DestinationProps } from "../entities/DestinationProps";

const styles = {
  styledCard: {
    overflow: "hidden",
    position: "relative",
    width: "100%",
    height: "100%",
  },
  styledCardMedia: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "top",
    borderRadius: "5px",
  },
  cityName: {
    position: "absolute",
    top: "16px",
    left: "16px",
    color: "white",
    textShadow: "0px 0px 8px rgba(0, 0, 0, 0.5)",
    fontWeight: "bold",
  },
};

const Destination = ({ destination }: DestinationProps) => {
  return (
    <Box sx={styles.styledCard}>
      <CardMedia
        component="img"
        src={destination.thumbnailUrl}
        alt={destination.cityName}
        sx={styles.styledCardMedia}
      />
      <Typography variant="h5" sx={styles.cityName}>
        {destination.cityName}
      </Typography>
    </Box>
  );
};

export default Destination;
