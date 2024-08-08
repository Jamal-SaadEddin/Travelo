import {
  Box,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import hero from "../../assets/hero.png";

const styles = {
  hero: {
    position: "relative",
    width: "100%",
    height: "calc(100vh - 164px)",
    overflow: "hidden",
  },
  heroText: {
    position: "absolute",
    top: "5%",
    textAlign: "start",
    textWrap: "nowrap",
  },
};

const StyledImage = styled("img")({
  width: "100%",
  height: "100%",
  filter: "blur(.5px) brightness(90%)",
});

const HeroSection = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ ...styles.hero }}>
      <StyledImage
        src={hero}
        alt="Hero Image"
        sx={{ objectFit: isSmallScreen ? "cover" : "fill" }}
      />
      <Box sx={styles.heroText}>
        <Typography fontWeight="bold" variant={isSmallScreen ? "h5" : "h2"}>
          Journey On,
        </Typography>
        <Typography fontWeight="bold" variant={isSmallScreen ? "h5" : "h2"}>
          Every trip, a new story.
        </Typography>
      </Box>
    </Box>
  );
};

export default HeroSection;
