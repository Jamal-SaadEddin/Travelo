import Navbar from "./components/Navbar";
import ThemeContextProvider from "./contexts/ThemeContext";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <ThemeContextProvider>
      <Navbar />
      <HomePage />
    </ThemeContextProvider>
  );
};

export default App;
