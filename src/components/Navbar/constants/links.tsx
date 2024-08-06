import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import Logo from "../../../assets/travelo-logo-dark.png";
import NavLink from "../entities/NavLink";

export const leftNavLinks: NavLink[] = [
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

const rightLink = {
  fontSize: 16,
  color: "primary.dark",
  // ml: 3,
  display: "flex",
  alignItems: "center",
  gap: 1,
};

export const rightNavLinks: NavLink[] = [
  { href: "/checkout", sx: rightLink, child_1: <ShoppingCartCheckoutIcon /> },
  { href: "/login", sx: rightLink, title: "Logout", child_2: <LogoutIcon /> },
];
