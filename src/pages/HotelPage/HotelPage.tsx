import { Container, Divider, Grid, Toolbar } from "@mui/material";
import HotelGallery from "../../components/HotelGallery";
import HotelPageHeader from "../../components/HotelPageHeader";
import ReviewsSlider from "../../components/ReviewsSlider";

const HotelPage = () => {
  return (
    <Container maxWidth="xl">
      <Toolbar
        sx={{ minHeight: { xs: "20px !important", md: "56px !important" } }}
      />
      <HotelPageHeader />
      <Divider sx={{ my: 2 }} />
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6.5} lg={8}>
          <HotelGallery />
        </Grid>
        <Grid item xs={12} md={5.5} lg={4}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12}>
              <ReviewsSlider />
            </Grid>
            <Grid item xs={12}>
              {/* <ReviewsSlider /> */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Divider sx={{ my: 2 }} />
    </Container>
  );
};

export default HotelPage;
