import { Grid, Typography } from "@mui/material";
import AdminDetailedGrid from "../../components/AdminDetailedGrid";
import SearchBar from "../../components/SearchBar";

const AdminPage = () => {
  return (
    <>
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
    </>
  );
};

export default AdminPage;
