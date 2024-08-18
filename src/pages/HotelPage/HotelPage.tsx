import { Container, Divider, Grid, Toolbar } from "@mui/material";
import AmenitiesStack from "../../components/AmenitiesStack";
import AvailableRooms from "../../components/AvailableRooms";
import HotelGallery from "../../components/HotelGallery";
import { gallery } from "../../components/HotelGallery/constants/gallery";
import HotelOverview from "../../components/HotelOverview";
import HotelPageHeader from "../../components/HotelPageHeader";
import Map from "../../components/Map";
import ReviewsSlider from "../../components/ReviewsSlider";
import { reviews } from "../../components/ReviewsSlider/constants/reviews";
import { HotelPageProps } from "./entities/HotelPageProps";

const HotelPage = ({ hotel }: HotelPageProps) => {
  const {
    hotelName,
    location,
    starRating,
    amenities,
    description,
    latitude,
    longitude,
  } = hotel;

  return (
    <Container maxWidth="xl">
      <Toolbar
        sx={{ minHeight: { xs: "20px !important", md: "56px !important" } }}
      />
      <HotelPageHeader
        hotelName={hotelName}
        location={location}
        starRating={starRating}
      />
      <Divider sx={{ my: 2 }} />
      <Grid container spacing={2}>
        <Grid item xs={12} container spacing={2}>
          <Grid item container spacing={2} xs={12} md={6.5} lg={8}>
            <Grid item xs={12}>
              <HotelGallery gallery={gallery} />
            </Grid>
            <Grid item xs={12}>
              <AmenitiesStack amenities={amenities} />
            </Grid>
            <Grid item xs={12}>
              <HotelOverview description={description} />
            </Grid>
            <Grid item xs={12}>
              <AvailableRooms />
            </Grid>
          </Grid>
          <Grid item xs={12} md={5.5} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <ReviewsSlider reviews={reviews} />
              </Grid>
              <Grid item xs={12}>
                <Map latitude={latitude} longitude={longitude} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HotelPage;
