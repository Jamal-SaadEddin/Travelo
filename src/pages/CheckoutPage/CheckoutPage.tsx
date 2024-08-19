import {
  Container,
  Divider,
  Grid,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import TripDetails from "./components/TripDetails";

const CheckoutPage = () => {
  return (
    <Container maxWidth="xl">
      <Toolbar
        sx={{ minHeight: { xs: "20px !important", md: "56px !important" } }}
      />
      <Paper elevation={3} sx={{ p: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4">Checkout</Typography>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Typography variant="h6" sx={{ pb: 2 }}>
              Your trip details
            </Typography>
            <TripDetails />
            <Divider sx={{ my: 2 }} />
          </Grid>
          <Grid item xs={12} lg={6}>
            Cards
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default CheckoutPage;
