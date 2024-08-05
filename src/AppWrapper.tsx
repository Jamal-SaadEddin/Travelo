import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import App from "./App";
import { useSystemTheme } from "./theme";

const AppWrapper: React.FC = () => {
  const theme = useSystemTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
};

export default AppWrapper;
