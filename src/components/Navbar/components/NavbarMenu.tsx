import MenuIcon from "@mui/icons-material/Menu";
import { Divider, IconButton } from "@mui/material";
import Fade from "@mui/material/Fade";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";
import NavbarLink, { NavbarLinkProps } from "./NavbarLink";

interface Props {
  leftNavLinks: NavbarLinkProps[];
  rightNavLinks: NavbarLinkProps[];
}

const NavbarMenu = ({ leftNavLinks, rightNavLinks }: Props) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
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
          <MenuItem key={index} onClick={handleClose}>
            <NavbarLink {...link} />
          </MenuItem>
        ))}
        <Divider />
        {rightNavLinks.map((link, index) => (
          <MenuItem key={index} onClick={handleClose}>
            <NavbarLink {...link} />
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default NavbarMenu;
