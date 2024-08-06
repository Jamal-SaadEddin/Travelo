import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import MuiToolbar from "@mui/material/Toolbar";
import Logo from "../../assets/travelo-logo-dark.png";
import NavbarLink from "./NavbarLink";

const rightLink = {
  fontSize: 16,
  color: "primary.dark",
  ml: 3,
  display: "flex",
  alignItems: "center",
  gap: 1,
};

const Navbar = () => {
  return (
    <div>
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
            <NavbarLink
              href="/"
              title="Travelo"
              sx={{
                fontSize: 24,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
              child_1={<img src={Logo} alt="travelo-logo" width={25} />}
            />
            <NavbarLink
              href="/Featured-Deals"
              sx={{ fontSize: 16 }}
              title="Featured Deals"
            />
            <NavbarLink
              href="/Recently-Visited-Hotels"
              sx={{ fontSize: 16 }}
              title="Recently-Visited-Hotels"
            />
            <NavbarLink
              href="/Trending-Destination"
              sx={{ fontSize: 16 }}
              title="Trending Destination"
            />
          </Box>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <NavbarLink
              href="/checkout"
              sx={rightLink}
              child_1={<ShoppingCartCheckoutIcon />}
            />
            <NavbarLink
              href="/login"
              sx={rightLink}
              title="Logout"
              child_2={<LogoutIcon />}
            />
          </Box>
        </MuiToolbar>
      </MuiAppBar>
      <MuiToolbar />
    </div>
  );
};

export default Navbar;
