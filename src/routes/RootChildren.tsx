import { Navigate, Route } from "react-router-dom";
import AdminPage from "../pages/AdminPage";
import CheckoutPage from "../pages/CheckoutPage";
import ConfirmationPage from "../pages/ConfirmationPage";
import HotelPage from "../pages/HotelPage";
import { hotel } from "../pages/HotelPage/constants/hotel";
import MainPage from "../pages/MainPage";
import SearchResultsPage from "../pages/SearchResultsPage";
import useAuthStore from "../store/auth.store";

export const RootChildren = () => {
  const { user } = useAuthStore();

  if (user?.userType === "Admin")
    return <Route index element={<AdminPage />} />;
  else if (user?.userType === "User")
    return (
      <>
        <Route index element={<MainPage />} />,
        <Route path="checkout" element={<CheckoutPage />} />,
        <Route path="search" element={<SearchResultsPage />} />,
        <Route path="hotel/:id" element={<HotelPage hotel={hotel} />} />,
        <Route path="confirmation" element={<ConfirmationPage />} />,
      </>
    );
  else return <Route index element={<Navigate to="/login" />} />;
};
