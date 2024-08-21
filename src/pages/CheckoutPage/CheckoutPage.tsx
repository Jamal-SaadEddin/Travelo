import {
  Container,
  Divider,
  Grid,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import BookedRooms from "./components/BookedRooms";
import PaymentForm from "./components/PaymentForm";
import TripDetails from "./components/TripDetails";

const styles = {
  divider: {
    position: "absolute",
    right: -25,
    top: 0,
    display: { xs: "none", md: "block" },
  },
};

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
          <Grid
            container
            item
            xs={12}
            spacing={{ xs: 2, md: 5 }}
            direction="row-reverse"
          >
            <Grid item xs={12} md={6}>
              <BookedRooms />
            </Grid>
            <Grid item xs={12} md={6} position="relative">
              <Typography variant="h6" sx={{ pb: 2 }}>
                Your trip details
              </Typography>
              <TripDetails />
              <Divider sx={{ my: 2 }} />
              <Typography variant="h6">Payment</Typography>
              <PaymentForm />
              <Divider orientation="vertical" sx={styles.divider} />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default CheckoutPage;
