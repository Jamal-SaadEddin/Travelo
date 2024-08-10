import { Container } from "@mui/material";
import FeaturedDeals from "../../components/FeaturedDeals";
import HeroSection from "../../components/HeroSection";
import SearchBox from "../../components/SearchBox";
import RecentlyVisitedHotels from "../../components/RecentlyVisitedHotels";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Container maxWidth="xl">
        <SearchBox />
        <FeaturedDeals />
        <RecentlyVisitedHotels />
      </Container>
    </>
  );
};

export default HomePage;
