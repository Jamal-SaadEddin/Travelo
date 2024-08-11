import { Container } from "@mui/material";
import FeaturedDeals from "../../components/FeaturedDeals";
import Footer from "../../components/Footer";
import HeroSection from "../../components/HeroSection";
import RecentlyVisitedHotels from "../../components/RecentlyVisitedHotels";
import SearchBox from "../../components/SearchBox";
import TrendingDestinations from "../../components/TrendingDestinations";
import HomeSection from "./components/HomeSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Container maxWidth="xl">
        <SearchBox />
        <HomeSection title="Featured Deals" children={<FeaturedDeals />} />
        <HomeSection
          title="Recently Visited Hotels"
          children={<RecentlyVisitedHotels />}
        />
        <HomeSection
          title="Trending Destinations"
          children={<TrendingDestinations />}
        />
        <Footer />
      </Container>
    </>
  );
};

export default HomePage;
