import { createTheme, ThemeOptions } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useMemo } from "react";

export const useSystemTheme = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const themeOptions: ThemeOptions = useMemo(
    () => ({
      palette: {
        mode: prefersDarkMode ? "dark" : "light",
        primary: {
          main: "#FFC604",
        },
      },
    }),
    [prefersDarkMode],
  );

  return createTheme(themeOptions);
};
