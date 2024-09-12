import { Box, CardMedia, Grid, Skeleton, Typography } from "@mui/material";
import { useTrendingDestinations } from "../../../hooks/useTrendingDestinations";
import { useStyles } from "../../../styles";

export interface Destination {
  cityId: number;
  cityName: string;
  countryName: string;
  description: string;
  thumbnailUrl: string;
}

const TrendingDestinations = () => {
  const { trendingDestinationStyles } = useStyles();
  const { data: destinations, isLoading } = useTrendingDestinations();

  if (isLoading) {
    return (
      <Grid container spacing={3}>
        {Array.from({ length: 2 }).map((_, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Skeleton variant="rectangular" height={314} />
          </Grid>
        ))}
      </Grid>
    );
  }

  return (
    <Grid container spacing={2}>
      {destinations?.map((destination, index) => (
        <Grid
          item
          xs={12}
          sm={index <= 1 ? 6 : 4}
          height="330px"
          key={index + destination.cityId}
        >
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
        </Grid>
      ))}
    </Grid>
  );
};

export default TrendingDestinations;
