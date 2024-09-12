import { Link } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

export interface NavbarLinkProps {
  scrollTo?: string;
  href?: string;
  sx?: object;
  title?: string;
  child_1?: React.ReactNode;
  child_2?: React.ReactNode;
  onClick?: () => void;
}

const NavbarLink = ({
  scrollTo = "",
  href = "/",
  sx,
  title,
  child_1,
  child_2,
  onClick,
}: NavbarLinkProps) => {
  return (
    <ScrollLink
      to={scrollTo}
      smooth={true}
      duration={500}
      style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
    >
      <NavLink to={href} style={{ textDecoration: "none", color: "inherit" }}>
        <Link
          variant="h6"
          underline="none"
          color="inherit"
          sx={sx}
          onClick={onClick}
          href={href}
        >
          {child_1}
          {title}
          {child_2}
        </Link>
      </NavLink>
    </ScrollLink>
  );
};

export default NavbarLink;
