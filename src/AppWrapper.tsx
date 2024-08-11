import React from "react";
import App from "./App";
import ThemeContextProvider from "./contexts/ThemeContext";

const AppWrapper: React.FC = () => {
  return (
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  );
};

export default AppWrapper;
