import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import Logo from "../../../assets/travelo-logo-dark.png";
import NavLink from "../entities/NavLink";

export const userLeftNavLinks: NavLink[] = [
  {
    href: "/",
    title: "Travelo",
    sx: {
      fontSize: 24,
      display: "flex",
      alignItems: "center",
      gap: 1,
    },
    child_1: <img src={Logo} alt="travelo-logo" width={25} />,
  },
  {
    href: "/Featured-Deals",
    sx: { fontSize: 16 },
    title: "Featured Deals",
  },
  {
    href: "/Recently-Visited-Hotels",
    sx: { fontSize: 16 },
    title: "Recently Visited Hotels",
  },
  {
    href: "/Trending-Destination",
    sx: { fontSize: 16 },
    title: "Trending Destination",
  },
];

export const adminLeftNavLinks: NavLink[] = [
  {
    href: "/",
    title: "Travelo",
    sx: {
      fontSize: 24,
      display: "flex",
      alignItems: "center",
      gap: 1,
    },
    child_1: <img src={Logo} alt="travelo-logo" width={25} />,
  },
  {
    href: "/cities",
    sx: { fontSize: 16 },
    title: "Cities",
  },
  {
    href: "/hotels",
    sx: { fontSize: 16 },
    title: "Hotels",
  },
  {
    href: "/rooms",
    sx: { fontSize: 16 },
    title: "Rooms",
  },
];

const rightLinkStyles = {
  fontSize: 16,
  color: "error.main",
  display: "flex",
  alignItems: "center",
  gap: 1,
};

export const userRightNavLinks: NavLink[] = [
  {
    href: "/checkout",
    sx: rightLinkStyles,
    title: "Checkout",
    child_2: <ShoppingCartCheckoutIcon />,
  },
  {
    href: "/login",
    sx: rightLinkStyles,
    title: "Logout",
    child_2: <LogoutIcon />,
  },
];

export const adminRightNavLinks: NavLink[] = [
  {
    href: "/login",
    sx: rightLinkStyles,
    title: "Logout",
    child_2: <LogoutIcon />,
  },
];
