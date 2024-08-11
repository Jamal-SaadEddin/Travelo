import { CssBaseline, PaletteMode } from "@mui/material";
import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Cookies from "js-cookie";
import React, {
  createContext,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from "react";

export interface ThemeContextType {
  themeMode: PaletteMode | "system";
  setThemeMode: (mode: PaletteMode | "system") => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);

const ThemeContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const systemPrefersDark = useMediaQuery("(prefers-color-scheme: dark)");

  const getInitialTheme = (): PaletteMode | "system" => {
    const savedTheme = Cookies.get("theme") as
      | PaletteMode
      | "system"
      | undefined;
    if (savedTheme) {
      return savedTheme;
    }
    return "system";
  };

  const [themeMode, setThemeMode] = useState<PaletteMode | "system">(
    getInitialTheme(),
  );

  const themeOptions: ThemeOptions = useMemo(() => {
    let mode: PaletteMode = systemPrefersDark ? "dark" : "light";
    if (themeMode === "light") mode = "light";
    if (themeMode === "dark") mode = "dark";

    return {
      palette: {
        mode: mode,
        primary: {
          main: "#FFC604",
        },
      },
    };
  }, [systemPrefersDark, themeMode]);

  useEffect(() => {
    Cookies.set("theme", themeMode, { expires: 365 });
  }, [themeMode]);

  const theme = createTheme(themeOptions);

  return (
    <ThemeContext.Provider value={{ themeMode, setThemeMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
