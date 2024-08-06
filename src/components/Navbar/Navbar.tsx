import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import MuiToolbar from "@mui/material/Toolbar";
import Logo from "../../assets/travelo-logo-dark.png";

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
            <Link
              variant="h6"
              underline="none"
              color="inherit"
              href="/"
              sx={{
                fontSize: 24,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <img src={Logo} alt="travelo-logo" width={25} />
              Travelo
            </Link>
            <Link
              variant="h6"
              underline="none"
              color="inherit"
              href="/Featured-Deals"
              sx={{ fontSize: 16 }}
            >
              Featured Deals
            </Link>
            <Link
              variant="h6"
              underline="none"
              color="inherit"
              href="/Recently-Visited-Hotels"
              sx={{ fontSize: 16 }}
            >
              Recently Visited Hotels
            </Link>
            <Link
              variant="h6"
              underline="none"
              color="inherit"
              href="/Trending-Destination"
              sx={{ fontSize: 16 }}
            >
              Trending Destination
            </Link>
          </Box>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="/checkout"
              sx={rightLink}
            >
              <ShoppingCartCheckoutIcon />
            </Link>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="/login"
              sx={rightLink}
            >
              Logout <LogoutIcon />
            </Link>
          </Box>
        </MuiToolbar>
      </MuiAppBar>
      <MuiToolbar />
    </div>
  );
};

export default Navbar;
