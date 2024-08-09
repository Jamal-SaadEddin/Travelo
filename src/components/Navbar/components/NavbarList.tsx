import { Box } from "@mui/material";
import NavbarLink from "./NavbarLink";
import NavLink from "../entities/NavLink";

interface Props {
  justifyContent: string;
  links: NavLink[];
}

const NavbarList = ({ justifyContent, links }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: justifyContent,
        alignItems: "center",
        gap: 5,
      }}
    >
      {links.map((link, index) => (
        <NavbarLink key={index} {...link} />
      ))}
    </Box>
  );
};

export default NavbarList;
