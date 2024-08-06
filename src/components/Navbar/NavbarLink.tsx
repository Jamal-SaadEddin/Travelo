import { Link } from "@mui/material";

interface Props {
  href: string;
  sx: object;
  title?: string;
  child_1?: React.ReactNode;
  child_2?: React.ReactNode;
}

const NavbarLink = ({ href, sx, title, child_1, child_2 }: Props) => {
  return (
    <Link variant="h6" underline="none" color="inherit" href={href} sx={sx}>
      {child_1}
      {title}
      {child_2}
    </Link>
  );
};

export default NavbarLink;
