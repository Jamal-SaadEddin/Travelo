import LogoutIcon from "@mui/icons-material/Logout";
import Logo from "../../../assets/travelo-logo-dark.png";
import CheckoutBadge from "../components/CheckoutBadge";
import NavbarLinkProps from "../entities/NavbarLinkProps";
import useAuthStore from "../../../store/auth.store";
import useCurrentPageStore from "../../../store/currentPage.store";

export const Links = () => {
  const signout = useAuthStore((state) => state.signout);
  const setCurrentPage = useCurrentPageStore((state) => state.setCurrentPage);

  const userLeftNavLinks: NavbarLinkProps[] = [
    {
      scrollTo: "root",
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
      sx: { fontSize: 16 },
      title: "Featured Deals",
    },
    {
      scrollTo: "recently-visited-hotels",
      sx: { fontSize: 16 },
      title: "Recently Visited Hotels",
    },
    {
      scrollTo: "trending-destinations",
      sx: { fontSize: 16 },
      title: "Trending Destinations",
    },
  ];

  const adminLeftNavLinks: NavbarLinkProps[] = [
    {
      scrollTo: "root",
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
      scrollTo: "root",
      sx: { fontSize: 16 },
      title: "Cities",
      onClick: () => setCurrentPage("cities"),
    },
    {
      scrollTo: "root",
      sx: { fontSize: 16 },
      title: "Hotels",
      onClick: () => setCurrentPage("hotels"),
    },
    {
      scrollTo: "root",
      sx: { fontSize: 16 },
      title: "Rooms",
      onClick: () => setCurrentPage("rooms"),
    },
  ];

  const rightLinkStyles = {
    fontSize: 16,
    display: "flex",
    alignItems: "center",
    gap: 1,
  };

  const userRightNavLinks: NavbarLinkProps[] = [
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
      onClick: signout,
    },
  ];

  const adminRightNavLinks: NavbarLinkProps[] = [
    {
      href: "/login",
      sx: rightLinkStyles,
      title: "Logout",
      child_2: <LogoutIcon />,
      onClick: signout,
    },
  ];

  return {
    userLeftNavLinks,
    adminLeftNavLinks,
    userRightNavLinks,
    adminRightNavLinks,
  };
};
