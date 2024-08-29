import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AdminPage from "./pages/AdminPage";

const App = () => {
  return (
    <>
      <Navbar />
      <AdminPage cardType="city" />
      <Footer />
    </>
  );
};

export default App;
