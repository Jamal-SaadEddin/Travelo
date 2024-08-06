import { Hidden } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import MuiToolbar from "@mui/material/Toolbar";
import NavbarList from "./NavbarList";
import { leftNavLinks, rightNavLinks } from "./constants/links";

const Navbar = () => {
  return (
    <>
      <MuiAppBar
        elevation={0}
        position="fixed"
        sx={{ px: { xs: 1, lg: 7, xl: 35 }, bgcolor: "inherit" }}
      >
        <MuiToolbar
          sx={{ justifyContent: "space-between", px: 0, bgcolor: "inherit" }}
        >
          <Hidden lgDown>
            <NavbarList justifyContent="flex-start" links={leftNavLinks} />
            <NavbarList justifyContent="flex-end" links={rightNavLinks} />
          </Hidden>
        </MuiToolbar>
      </MuiAppBar>
      <MuiToolbar />
    </>
  );
};

export default Navbar;
