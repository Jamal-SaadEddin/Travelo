import { Button, Grid } from "@mui/material";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import FormikTextField from "../../../components/FormikTextField";
import { validationSchema } from "../utils/validationSchema";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  cardNumber: "",
  expirationDate: "",
  cvc: "",
  zip: "",
};

const PaymentForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (values: {
    firstName: string;
    lastName: string;
    email: string;
    cardNumber: string;
    expirationDate: string;
    cvc: string;
    zip: string;
  }) => {
    console.log("onSubmit", values);
    navigate("/confirmation");
  };

  return (
    <Formik
      initialValues={initialValues!}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <Grid container columnSpacing={2}>
            <Grid item xs={12} sm={6}>
              <FormikTextField
                name="firstName"
                label="First name"
                autoComplete="given-name"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormikTextField
                name="lastName"
                label="Last name"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <FormikTextField
                name="email"
                label="Email address"
                type="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <FormikTextField
                name="cardNumber"
                label="Card number"
                autoComplete="cc-number"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormikTextField
                name="expirationDate"
                label="Expiration date"
                autoComplete="cc-exp"
                placeholder="MM/YY"
                maxLength={5}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormikTextField
                name="cvc"
                label="CVC"
                autoComplete="cc-csc"
                maxLength={3}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormikTextField
                name="zip"
                label="ZIP code"
                autoComplete="postal-code"
              />
            </Grid>
            <Grid item xs={12} mt={2}>
              <Button variant="contained" color="primary" type="submit">
                Book Now
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default PaymentForm;
