import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import SearchResultsPage from "./pages/SearchResultsPage";

const App = () => {
  return (
    <>
      <Navbar />
      <SearchResultsPage />
      {/* <HomePage /> */}
      <Footer />
    </>
  );
};

export default App;
