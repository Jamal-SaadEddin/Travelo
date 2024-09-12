import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import {
  Box,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import { useThemeContext } from "@src/contexts/useThemeContext";
import React, { useState } from "react";

interface ThemeMenuProps {
  lgDown?: boolean;
}

const ThemeMenu = ({ lgDown }: ThemeMenuProps) => {
  const { themeMode, setThemeMode } = useThemeContext();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleThemeChange = (theme: "system" | "light" | "dark") => {
    setThemeMode(theme);
    handleMenuClose();
  };

  const getIconForTheme = () => {
    switch (themeMode) {
      case "light":
        return <LightModeIcon />;
      case "dark":
        return <DarkModeIcon />;
      default:
        return <SettingsBrightnessIcon />;
    }
  };

  return (
    <Box flex={1} textAlign="right" pr={lgDown ? 2 : 5}>
      <IconButton
        edge="end"
        color="inherit"
        aria-controls="theme-menu"
        aria-haspopup="true"
        onClick={handleMenuClick}
      >
        {getIconForTheme()}
      </IconButton>
      <Menu
        id="theme-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem
          selected={themeMode === "light"}
          onClick={() => handleThemeChange("light")}
        >
          <ListItemIcon>
            <LightModeIcon />
          </ListItemIcon>
          <ListItemText primary="Light" />
        </MenuItem>
        <MenuItem
          selected={themeMode === "system"}
          onClick={() => handleThemeChange("system")}
        >
          <ListItemIcon>
            <SettingsBrightnessIcon />
          </ListItemIcon>
          <ListItemText primary="System" />
        </MenuItem>
        <MenuItem
          selected={themeMode === "dark"}
          onClick={() => handleThemeChange("dark")}
        >
          <ListItemIcon>
            <DarkModeIcon />
          </ListItemIcon>
          <ListItemText primary="Dark" />
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default ThemeMenu;
