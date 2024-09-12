import { Box, Typography } from "@mui/material";

interface HomeSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const HomeSection = ({ id, title, children }: HomeSectionProps) => {
  return (
    <section id={id}>
      <Box pt={10}>
        <Typography variant="h4" gutterBottom>
          {title}
        </Typography>
        {children}
      </Box>
    </section>
  );
};

export default HomeSection;
