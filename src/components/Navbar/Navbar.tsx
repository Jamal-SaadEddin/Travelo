import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import MuiToolbar from "@mui/material/Toolbar";
import NavbarLink from "./NavbarLink";
import { leftNavLinks, rightNavLinks } from "./constants/links";

const Navbar = () => {
  return (
    <>
      <MuiAppBar
        elevation={0}
        position="fixed"
        sx={{ px: 35, bgcolor: "inherit" }}
      >
        <MuiToolbar
          sx={{ justifyContent: "space-between", px: 0, bgcolor: "inherit" }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 5,
            }}
          >
            {leftNavLinks.map((link, index) => (
              <NavbarLink key={index} {...link} />
            ))}
          </Box>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: 3,
            }}
          >
            {rightNavLinks.map((link, index) => (
              <NavbarLink key={index} {...link} />
            ))}
          </Box>
        </MuiToolbar>
      </MuiAppBar>
      <MuiToolbar />
    </>
  );
};

export default Navbar;
