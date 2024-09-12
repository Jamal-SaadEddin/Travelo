import {
  Box,
  Container,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import hero from "../../../assets/hero.jpg";

const styles = {
  hero: {
    position: "relative",
    width: "100%",
    height: "calc(100vh - 64px)",
    overflow: "hidden",
  },
  heroText: {
    position: "absolute",
    top: "35%",
    textAlign: "start",
    textWrap: "nowrap",
    color: "white",
  },
};

const StyledImage = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  filter: "blur(.5px) brightness(90%)",
});

const HeroSection = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ ...styles.hero }}>
      <StyledImage src={hero} alt="Hero Image" />
      <Container maxWidth="xl">
        <Box sx={styles.heroText}>
          <Typography fontWeight="bold" variant={isSmallScreen ? "h4" : "h2"}>
            Journey{" "}
            <Typography
              component="span"
              fontWeight="bold"
              variant={isSmallScreen ? "h4" : "h2"}
              color={theme.palette.primary.main}
            >
              On!
            </Typography>
          </Typography>
          <Typography fontWeight="bold" variant={isSmallScreen ? "h4" : "h2"}>
            Every trip,{" "}
            <Typography
              component="span"
              fontWeight="bold"
              variant={isSmallScreen ? "h4" : "h2"}
              color={theme.palette.primary.main}
            >
              a new story.
            </Typography>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
