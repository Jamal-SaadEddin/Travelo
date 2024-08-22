import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CheckoutPage from "./pages/CheckoutPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import HomePage from "./pages/HomePage";
import HotelPage from "./pages/HotelPage";
import { hotel } from "./pages/HotelPage/constants/hotel";
import LoginPage from "./pages/LoginPage";
import SearchResultsPage from "./pages/SearchResultsPage";

const App = () => {
  return (
    <>
      <Navbar />
      <ConfirmationPage />
      {/* <CheckoutPage /> */}
      {/* <HotelPage hotel={hotel} /> */}
      {/* <SearchResultsPage /> */}
      {/* <HomePage /> */}
      <Footer />
      {/* <LoginPage /> */}
    </>
  );
};

export default App;
