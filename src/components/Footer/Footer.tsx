import { Box, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box pt={10} pb={5} textAlign="center">
      Made with ❤️ by{" "}
      <Link href="https://jamalsaadeddin.netlify.app/" target="_blank">
        Jamal SaadEddin
      </Link>
      .<br />
      All rights reserved. {new Date().getFullYear()}
    </Box>
  );
};

export default Footer;
