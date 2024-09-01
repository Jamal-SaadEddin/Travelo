import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Logo from "../../assets/travelo-logo-dark.png";

const NotFound: React.FC = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box>
        <img src={Logo} alt="travelo-logo" width={125} />
        <Typography variant="h1" component="h1" gutterBottom mt={4}>
          404
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Page Not Found
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          Sorry, the page you are looking for does not exist. It might have been
          moved or deleted.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={RouterLink}
          to="/"
          sx={{ marginTop: 4 }}
        >
          Go Back Home
        </Button>
      </Box>
    </Container>
  );
};

export default NotFound;
