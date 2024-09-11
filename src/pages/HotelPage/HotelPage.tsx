import { Container, Divider, Grid, Toolbar } from "@mui/material";
import { useEffect, useState } from "react";
import AmenitiesStack from "../../components/AmenitiesStack";
import AvailableRooms from "../../components/AvailableRooms";
import HotelGallery from "../../components/HotelGallery";
import HotelOverview from "../../components/HotelOverview";
import HotelPageHeader from "../../components/HotelPageHeader";
import MapComponent from "../../components/MapComponent";
import ReviewsSlider from "../../components/ReviewsSlider";
import { useHotelPage } from "../../hooks/useHotelPage";
import useSelectedHotelIdStore from "../../store/selectedHotelId.store";
import { initialHotel } from "./constants/initialHotel";
import { Hotel } from "./entities/Hotel";

const HotelPage = () => {
  const selectedHotelId = useSelectedHotelIdStore(
    (state) => state.selectedHotelId,
  );
  const { useHotelData, useHotelGallery, useHotelReviews } =
    useHotelPage(selectedHotelId);
  const { data: hotel, isLoading } = useHotelData();
  const { data: gallery } = useHotelGallery();
  const { data: reviews } = useHotelReviews();

  const [currentHotel, setCurrentHotel] = useState<Hotel>(initialHotel);

  useEffect(() => {
    if (hotel) {
      setCurrentHotel(hotel);
    }
  }, [hotel]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Container maxWidth="xl">
      <Toolbar
        sx={{ minHeight: { xs: "20px !important", md: "56px !important" } }}
      />
      <HotelPageHeader
        hotelName={currentHotel.hotelName}
        location={currentHotel.location}
        starRating={currentHotel.starRating}
      />
      <Divider sx={{ my: 2 }} />
      <Grid container spacing={2}>
        <Grid item xs={12} container spacing={2}>
          <Grid item container spacing={2} xs={12} md={6.5} lg={8}>
            <Grid item xs={12}>
              {gallery && <HotelGallery gallery={gallery} />}
            </Grid>
            <Grid item xs={12}>
              <AmenitiesStack amenities={currentHotel.amenities} />
            </Grid>
            <Grid item xs={12}>
              <HotelOverview description={currentHotel.description} />
            </Grid>
            <Grid item xs={12}>
              <AvailableRooms />
            </Grid>
          </Grid>
          <Grid item xs={12} md={5.5} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                {reviews && <ReviewsSlider reviews={reviews} />}
              </Grid>
              <Grid item xs={12}>
                <MapComponent
                  latitude={currentHotel.latitude}
                  longitude={currentHotel.longitude}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HotelPage;
