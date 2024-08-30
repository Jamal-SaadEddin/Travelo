import LogoutIcon from "@mui/icons-material/Logout";
import Logo from "../../../assets/travelo-logo-dark.png";
import CheckoutBadge from "../components/CheckoutBadge";
import NavbarLinkProps from "../entities/NavbarLinkProps";

export const userLeftNavLinks: NavbarLinkProps[] = [
  {
    scrollTo: "root",
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
    scrollTo: "featured-deals",
    href: "/",
    sx: { fontSize: 16 },
    title: "Featured Deals",
  },
  {
    scrollTo: "recently-visited-hotels",
    href: "/",
    sx: { fontSize: 16 },
    title: "Recently Visited Hotels",
  },
  {
    scrollTo: "trending-destinations",
    href: "/",
    sx: { fontSize: 16 },
    title: "Trending Destinations",
  },
];

export const adminLeftNavLinks: NavbarLinkProps[] = [
  {
    scrollTo: "root",
    href: "/cities",
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
  display: "flex",
  alignItems: "center",
  gap: 1,
};

export const userRightNavLinks: NavbarLinkProps[] = [
  {
    href: "/checkout",
    sx: rightLinkStyles,
    title: "Checkout",
    child_2: <CheckoutBadge />,
  },
  {
    href: "/login",
    sx: rightLinkStyles,
    title: "Logout",
    child_2: <LogoutIcon />,
  },
];

export const adminRightNavLinks: NavbarLinkProps[] = [
  {
    href: "/login",
    sx: rightLinkStyles,
    title: "Logout",
    child_2: <LogoutIcon />,
  },
];
