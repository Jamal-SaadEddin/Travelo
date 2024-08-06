import { Link } from "@mui/material";
import NavLink from "../entities/NavLink";

const NavbarLink = ({ href, sx, title, child_1, child_2 }: NavLink) => {
  return (
    <Link variant="h6" underline="none" color="inherit" href={href} sx={sx}>
      {child_1}
      {title}
      {child_2}
    </Link>
  );
};

export default NavbarLink;
