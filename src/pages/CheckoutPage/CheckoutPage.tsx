import { Container, Toolbar } from "@mui/material";

const CheckoutPage = () => {
  return (
    <Container maxWidth="xl">
      <Toolbar
        sx={{ minHeight: { xs: "20px !important", md: "56px !important" } }}
      />
    </Container>
  );
};

export default CheckoutPage;
