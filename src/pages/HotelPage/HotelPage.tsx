import { Container, Divider, Grid, Skeleton, Toolbar } from "@mui/material";
import AmenitiesStack from "@src/components/common/AmenitiesStack";
import MapComponent from "@src/components/common/MapComponent";
import { HotelPage_Hotel } from "@src/entities/common/Hotel";
import { useHotelPage } from "@src/hooks/useHotelPage";
import useSelectedHotelIdStore from "@src/store/selectedHotelId.store";
import { useEffect, useState } from "react";
import AvailableRooms from "./components/AvailableRooms";
import HotelGallery from "./components/HotelGallery";
import HotelOverview from "./components/HotelOverview";
import HotelPageHeader from "./components/HotelPageHeader";
import ReviewsSlider from "./components/ReviewsSlider";
import { initialHotel } from "./constants/initialHotel";

const HotelPage = () => {
  const selectedHotelId = useSelectedHotelIdStore(
    (state) => state.selectedHotelId,
  );
  const { useHotelData, useHotelGallery, useHotelReviews } =
    useHotelPage(selectedHotelId);
  const { data: hotel, isLoading: isLoadingHotel } = useHotelData();
  const { data: gallery, isLoading: isLoadingGallery } = useHotelGallery();
  const { data: reviews, isLoading: isLoadingReviews } = useHotelReviews();

  const [currentHotel, setCurrentHotel] = useState<HotelPage_Hotel>(
    initialHotel as HotelPage_Hotel,
  );

  useEffect(() => {
    if (hotel) {
      setCurrentHotel(hotel as HotelPage_Hotel);
    }
  }, [hotel]);

  return (
    <Container maxWidth="xl">
      <Toolbar
        sx={{ minHeight: { xs: "20px !important", md: "56px !important" } }}
      />
      <HotelPageHeader
        hotelName={currentHotel.hotelName}
        location={currentHotel.location}
        starRating={currentHotel.starRating}
        isLoading={isLoadingHotel}
      />
      <Divider sx={{ my: 2 }} />
      <Grid container spacing={2}>
        <Grid item xs={12} container spacing={2}>
          <Grid item container spacing={2} xs={12} md={6.5} lg={8}>
            <Grid item xs={12}>
              {isLoadingGallery ? (
                <Skeleton height={363} />
              ) : (
                gallery && <HotelGallery gallery={gallery} />
              )}
            </Grid>
            <Grid item xs={12}>
              <AmenitiesStack
                amenities={currentHotel.amenities}
                isLoading={isLoadingHotel}
              />
            </Grid>
            <Grid item xs={12}>
              {isLoadingHotel ? (
                <Skeleton height={220} />
              ) : (
                <HotelOverview description={currentHotel.description} />
              )}
            </Grid>
            <Grid item xs={12}>
              <AvailableRooms />
            </Grid>
          </Grid>
          <Grid item xs={12} md={5.5} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                {isLoadingReviews ? (
                  <Skeleton height={224} />
                ) : (
                  reviews && <ReviewsSlider reviews={reviews} />
                )}
              </Grid>
              <Grid item xs={12}>
                {isLoadingHotel ? (
                  <Skeleton height={331} />
                ) : (
                  <MapComponent
                    latitude={currentHotel.latitude}
                    longitude={currentHotel.longitude}
                  />
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HotelPage;
