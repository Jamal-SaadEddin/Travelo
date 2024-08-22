import { Grid, Typography } from "@mui/material";
import AdminDetailedGrid from "./components/AdminDetailedGrid";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";

const App = () => {
  return (
    <>
      <Navbar />
      <SearchBar />
      <AdminDetailedGrid>
        <Grid item xs={12} md={6} lg={4}>
          <Typography>Admin Dashboard</Typography>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Typography>Admin Dashboard</Typography>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Typography>Admin Dashboard</Typography>
        </Grid>
      </AdminDetailedGrid>
      <Footer />
    </>
  );
};

export default App;
