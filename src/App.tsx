import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import HotelPage from "./pages/HotelPage";
import SearchResultsPage from "./pages/SearchResultsPage";

const App = () => {
  return (
    <>
      <Navbar />
      <HotelPage />
      {/* <SearchResultsPage /> */}
      {/* <HomePage /> */}
      <Footer />
    </>
  );
};

export default App;
