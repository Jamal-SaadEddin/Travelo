import { Navigate, Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
// import { user } from "../../hooks/useAuth";

const user = { type: "user" };

const HomePage = () => {
  if (user === null) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default HomePage;
