import AdminPage from "@src/pages/AdminPage";
import CheckoutPage from "@src/pages/CheckoutPage";
import ConfirmationPage from "@src/pages/ConfirmationPage";
import HotelPage from "@src/pages/HotelPage";
import MainPage from "@src/pages/MainPage";
import SearchResultsPage from "@src/pages/SearchResultsPage";
import useAuthStore from "@src/store/auth.store";
import { Navigate, Route } from "react-router-dom";

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
        <Route path="hotel/:id" element={<HotelPage />} />,
        <Route path="confirmation" element={<ConfirmationPage />} />,
      </>
    );
  else return <Route index element={<Navigate to="/login" />} />;
};
