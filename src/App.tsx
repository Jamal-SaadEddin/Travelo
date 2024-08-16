import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import HotelPage from "./pages/HotelPage";
import { hotel } from "./pages/HotelPage/constants/hotel";
import SearchResultsPage from "./pages/SearchResultsPage";

const App = () => {
  return (
    <>
      <Navbar />
      <HotelPage hotel={hotel} />
      {/* <SearchResultsPage /> */}
      {/* <HomePage /> */}
      <Footer />
    </>
  );
};

export default App;
