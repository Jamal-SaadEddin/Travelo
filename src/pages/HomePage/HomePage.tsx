import { Container } from "@mui/material";
import FeaturedDeals from "../../components/FeaturedDeals";
import HeroSection from "../../components/HeroSection";
import SearchBox from "../../components/SearchBox";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Container maxWidth="xl">
        <SearchBox />
        <FeaturedDeals />
      </Container>
    </>
  );
};

export default HomePage;
