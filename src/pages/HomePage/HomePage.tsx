import { Container } from "@mui/material";
import FeaturedDeals from "../../components/FeaturedDeals";
import HeroSection from "../../components/HeroSection";
import SearchBox from "../../components/SearchBox";
import RecentlyVisitedHotels from "../../components/RecentlyVisitedHotels";
import TrendingDestinations from "../../components/TrendingDestinations";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Container maxWidth="xl">
        <SearchBox />
        <FeaturedDeals />
        <RecentlyVisitedHotels />
        <TrendingDestinations />
      </Container>
    </>
  );
};

export default HomePage;
