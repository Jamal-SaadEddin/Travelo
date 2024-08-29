import { Container, Hidden } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import MuiToolbar from "@mui/material/Toolbar";
import NavbarLink from "./components/NavbarLink";
import NavbarList from "./components/NavbarList";
import NavbarMenu from "./components/NavbarMenu";
import ThemeMenu from "./components/ThemeMenu";
import { adminLeftNavLinks, adminRightNavLinks } from "./constants/links";

const Navbar = () => {
  return (
    <>
      <MuiAppBar position="fixed" sx={{ zIndex: 1000 }}>
        <Container maxWidth="xl">
          <MuiToolbar
            sx={{ justifyContent: "space-between", px: "0 !important" }}
          >
            <Hidden lgDown>
              <NavbarList
                justifyContent="flex-start"
                links={adminLeftNavLinks}
              />
              <ThemeMenu />
              <NavbarList
                justifyContent="flex-end"
                links={adminRightNavLinks}
              />
            </Hidden>
            <Hidden lgUp>
              <NavbarLink {...adminLeftNavLinks[0]} />
              <ThemeMenu lgDown />
              <NavbarMenu
                leftNavLinks={adminLeftNavLinks}
                rightNavLinks={adminRightNavLinks}
              />
            </Hidden>
          </MuiToolbar>
        </Container>
      </MuiAppBar>
      <MuiToolbar />
    </>
  );
};

export default Navbar;
