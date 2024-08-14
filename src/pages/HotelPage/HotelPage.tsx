import { Container, Divider, Toolbar } from "@mui/material";
import HotelGallery from "../../components/HotelGallery";
import HotelPageHeader from "../../components/HotelPageHeader";

const HotelPage = () => {
  return (
    <Container maxWidth="xl">
      <Toolbar
        sx={{ minHeight: { xs: "20px !important", md: "56px !important" } }}
      />
      <HotelPageHeader />
      <Divider sx={{ my: 2 }} />
      <HotelGallery />
    </Container>
  );
};

export default HotelPage;
