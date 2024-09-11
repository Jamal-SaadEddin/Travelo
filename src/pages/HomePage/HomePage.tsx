import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import useAutoSignout from "../../hooks/useAutoSignout";
import useWelcomeToast from "../../hooks/useWelcomeToast";
import ScrollToTop from "../../routes/ScrollToTop";
import useAuthStore from "../../store/auth.store";

const HomePage = () => {
  const { user, signout } = useAuthStore();
  useAutoSignout(user?.exp as number, signout);
  useWelcomeToast();

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default HomePage;
