import AdminPage from "../pages/AdminPage";
import MainPage from "../pages/MainPage";
import useAuthStore from "../store/auth.store";
import { Navigate, useLocation } from "react-router-dom";

function RootRoute() {
  const { user } = useAuthStore();
  const location = useLocation();

  if (user?.userType === "Admin") {
    return <AdminPage />;
  } else if (user?.userType === "User") {
    return <MainPage />;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
}

export default RootRoute;
