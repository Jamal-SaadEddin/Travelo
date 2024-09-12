import { Container } from "@mui/material";
import SearchBox from "@src/components/common/SearchBox";
import { Navigate } from "react-router-dom";
import FeaturedDeals from "./components/FeaturedDeals";
import HeroSection from "./components/HeroSection";
import HomeSection from "./components/HomeSection";
import RecentlyVisitedHotels from "./components/RecentlyVisitedHotels";
import TrendingDestinations from "./components/TrendingDestinations";

const user = { type: "user" };

const MainPage = () => {
  if (user.type === "admin") {
    return <Navigate to="/cities" />;
  }

  return (
    <>
      <HeroSection />
      <Container maxWidth="xl">
        <SearchBox />
        <HomeSection
          id="featured-deals"
          title="Featured Deals"
          children={<FeaturedDeals />}
        />
        <HomeSection
          id="recently-visited-hotels"
          title="Recently Visited Hotels"
          children={<RecentlyVisitedHotels />}
        />
        <HomeSection
          id="trending-destinations"
          title="Trending Destinations"
          children={<TrendingDestinations />}
        />
      </Container>
    </>
  );
};

export default MainPage;
