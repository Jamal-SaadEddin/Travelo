import { Box, Typography } from "@mui/material";
import { HomeSectionProps } from "../entities/HomeSectionProps";

const HomeSection = ({ title, children }: HomeSectionProps) => {
  return (
    <Box pt={10}>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      {children}
    </Box>
  );
};

export default HomeSection;
