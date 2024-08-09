import { Container } from "@mui/material";
import HeroSection from "../../components/HeroSection";
import SearchBox from "../../components/SearchBox";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Container maxWidth="xl">
        <SearchBox />
      </Container>
    </>
  );
};

export default HomePage;
