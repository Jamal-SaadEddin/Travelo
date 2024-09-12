import HomePage from "@src/pages/HomePage";
import LoginPage from "@src/pages/LoginPage";
import NotFoundPage from "@src/pages/NotFoundPage";
import React from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { RootChildren } from "./RootChildren";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} children={RootChildren()} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
        <Route path="/not-found" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
