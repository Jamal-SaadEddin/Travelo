import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AdminPage from "./pages/AdminPage";

const App = () => {
  return (
    <>
      <Navbar />
      <AdminPage cardType="room" />
      <Footer />
    </>
  );
};

export default App;
