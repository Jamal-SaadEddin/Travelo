import React from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import CheckoutPage from "./pages/CheckoutPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import HomePage from "./pages/HomePage";
import HotelPage from "./pages/HotelPage";
import { hotel } from "./pages/HotelPage/constants/hotel";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import NotFoundPage from "./pages/NotFoundPage";
import SearchResultsPage from "./pages/SearchResultsPage";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<MainPage />} />
          <Route path="cities" element={<AdminPage dataType="city" />} />
          <Route path="hotels" element={<AdminPage dataType="hotel" />} />
          <Route path="rooms" element={<AdminPage dataType="room" />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="search" element={<SearchResultsPage />} />
          <Route path="hotel/:id" element={<HotelPage hotel={hotel} />} />
          <Route path="confirmation" element={<ConfirmationPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
        <Route path="/not-found" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
