import { Grid } from "@mui/material";
import AdminDetailedGrid from "../../components/AdminDetailedGrid";
import SearchBar from "../../components/SearchBar";
import CityCard from "./components/CityCard";
import { cities } from "./constants";

const AdminPage = () => {
  return (
    <>
      <SearchBar />
      <AdminDetailedGrid>
        {cities.map((city) => (
          <Grid item xs={12} md={6} lg={4} key={city.id}>
            <CityCard city={city} />
          </Grid>
        ))}
      </AdminDetailedGrid>
    </>
  );
};

export default AdminPage;
