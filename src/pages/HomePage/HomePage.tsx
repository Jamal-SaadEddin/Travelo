import Footer from "@src/components/Footer";
import Navbar from "@src/components/Navbar";
import ScrollToTop from "@src/components/ScrollToTop";
import useAutoSignout from "@src/hooks/useAutoSignout";
import useWelcomeToast from "@src/hooks/useWelcomeToast";
import useAuthStore from "@src/store/auth.store";
import { Outlet } from "react-router-dom";

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
