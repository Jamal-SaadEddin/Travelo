import { Box } from "@mui/material";
import NavbarLink, { NavbarLinkProps } from "./NavbarLink";

interface Props {
  justifyContent: string;
  links: NavbarLinkProps[];
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
