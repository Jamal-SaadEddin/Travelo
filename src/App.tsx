import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import SearchResultsPage from "./pages/SearchResultsPage";

const App = () => {
  return (
    <>
      <Navbar />
      <SearchResultsPage />
      {/* <HomePage /> */}
    </>
  );
};

export default App;
