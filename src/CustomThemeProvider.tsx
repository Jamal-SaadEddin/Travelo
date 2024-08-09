// src/CustomThemeProvider.tsx
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import React, { ReactNode } from "react";
import { useSystemTheme } from "./theme";

interface CustomThemeProviderProps {
  children: ReactNode;
}

const CustomThemeProvider: React.FC<CustomThemeProviderProps> = ({
  children,
}) => {
  const theme = useSystemTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default CustomThemeProvider;
