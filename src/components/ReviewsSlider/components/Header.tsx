import { Button, Stack, Typography } from "@mui/material";

const styles = {
  textTransform: "none",
  fontSize: "1rem",
  textDecoration: "underline",
  "&:hover": {
    textDecoration: "underline",
    backgroundColor: "transparent",
  },
};

const Header = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      mb={1}
    >
      <Typography variant="h4">Reviews</Typography>
      <Button sx={styles}>View all</Button>
    </Stack>
  );
};

export default Header;
