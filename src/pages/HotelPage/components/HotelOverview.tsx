import { Paper, Typography } from "@mui/material";

const HotelOverview = ({ description }: { description: string }) => {
  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <Typography variant="h5" gutterBottom>
        Overview
      </Typography>
      <Typography>{description}</Typography>
    </Paper>
  );
};

export default HotelOverview;
