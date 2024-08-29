import { Container, Hidden } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import MuiToolbar from "@mui/material/Toolbar";
import { user } from "../../hooks/useAuth";
import NavbarLink from "./components/NavbarLink";
import NavbarList from "./components/NavbarList";
import NavbarMenu from "./components/NavbarMenu";
import ThemeMenu from "./components/ThemeMenu";
import {
  adminLeftNavLinks,
  adminRightNavLinks,
  userLeftNavLinks,
  userRightNavLinks,
} from "./constants/links";

const Navbar = () => {
  let leftNavLinks;
  let rightNavLinks;
  switch (user.type) {
    case "admin":
      leftNavLinks = adminLeftNavLinks;
      rightNavLinks = adminRightNavLinks;
      break;
    case "user":
      leftNavLinks = userLeftNavLinks;
      rightNavLinks = userRightNavLinks;
      break;
    default:
      leftNavLinks = userLeftNavLinks;
      rightNavLinks = userRightNavLinks;
  }

  return (
    <>
      <MuiAppBar position="fixed" sx={{ zIndex: 1000 }}>
        <Container maxWidth="xl">
          <MuiToolbar
            sx={{ justifyContent: "space-between", px: "0 !important" }}
          >
            <Hidden lgDown>
              <NavbarList justifyContent="flex-start" links={leftNavLinks} />
              <ThemeMenu />
              <NavbarList justifyContent="flex-end" links={rightNavLinks} />
            </Hidden>
            <Hidden lgUp>
              <NavbarLink {...leftNavLinks[0]} />
              <ThemeMenu lgDown />
              <NavbarMenu
                leftNavLinks={leftNavLinks}
                rightNavLinks={rightNavLinks}
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
