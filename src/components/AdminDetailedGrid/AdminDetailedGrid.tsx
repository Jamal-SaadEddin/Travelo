import { Container, Grid } from "@mui/material";

interface AdminDetailedGridProps {
  children: React.ReactNode | React.ReactNode[];
}

const AdminDetailedGrid = ({ children }: AdminDetailedGridProps) => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        {children}
      </Grid>
    </Container>
  );
};

export default AdminDetailedGrid;
