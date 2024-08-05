import React from "react";
import App from "./App";
import CustomThemeProvider from "./CustomThemeProvider";

const AppWrapper: React.FC = () => {
  return (
    <CustomThemeProvider>
      <App />
    </CustomThemeProvider>
  );
};

export default AppWrapper;
