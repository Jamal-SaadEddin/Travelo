import { Link } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import NavbarLinkProps from "../entities/NavbarLinkProps";

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
