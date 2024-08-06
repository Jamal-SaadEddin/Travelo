import MenuIcon from "@mui/icons-material/Menu";
import { Divider } from "@mui/material";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";
import { leftNavLinks, rightNavLinks } from "./constants/links";

const NavbarMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLink = (href: string) => {
    handleClose();
    window.location.href = href;
  };

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {leftNavLinks.slice(1).map((link, index) => (
          <MenuItem key={index} onClick={() => handleLink(link.href)}>
            {link.title}
          </MenuItem>
        ))}
        <Divider />
        {rightNavLinks.map((link, index) => (
          <MenuItem key={index} onClick={() => handleLink(link.href)}>
            {link.title}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default NavbarMenu;
