import { Paper } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Promotional_BG from "@src/assets/promotional-background.jpg";
import Logo from "@src/assets/travelo-logo-dark.png";
import * as React from "react";

const PromotionalSection: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "background.default",
        color: "text.primary",
        position: "relative",
      }}
      component={Paper}
      elevation={6}
      square
    >
      <img src={Promotional_BG} alt="Travel" style={{ width: "100%" }} />
      <Typography variant="h4" sx={{ mt: 4, mb: 1 }}>
        Welcome to Travelo <img src={Logo} alt="travelo-logo" width={25} />
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Discover and book amazing travel experiences with ease. Join us today
        and start your journey!
      </Typography>
    </Box>
  );
};

export default PromotionalSection;
