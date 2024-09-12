import { Button, Grid } from "@mui/material";
import FormikTextField from "@src/components/common/FormikTextField";
import { HotelPage_Hotel } from "@src/entities/common/Hotel";
import { useHotelPage } from "@src/hooks/useHotelPage";
import { usePayment } from "@src/hooks/usePayment";
import useCartStore from "@src/store/cartStore";
import useSearchBoxStore from "@src/store/searchBoxStore";
import useSelectedHotelIdStore from "@src/store/selectedHotelId.store";
import { Form, Formik } from "formik";
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
  const bookedRooms = useCartStore((s) => s.bookedRooms);
  const searchQueries = useSearchBoxStore((state) => state.searchQueries);
  const selectedHotelId = useSelectedHotelIdStore(
    (state) => state.selectedHotelId,
  );

  const { useHotelData } = useHotelPage(selectedHotelId);
  const { data: hotel } = useHotelData();
  const { useAddBooking } = usePayment();
  const addBooking = useAddBooking();

  const handleSubmit = (values: {
    firstName: string;
    lastName: string;
    email: string;
    cardNumber: string;
    expirationDate: string;
    cvc: string;
    zip: string;
  }) => {
    if (hotel)
      for (const room of bookedRooms)
        addBooking.mutate({
          customerName: `${values.firstName} ${values.lastName}`,
          hotelName: (hotel as HotelPage_Hotel).hotelName,
          roomNumber: room.roomNumber?.toString(),
          roomType: room.roomType,
          bookingDateTime: searchQueries.checkIn.toISOString(),
          totalCost: room.price!,
          paymentMethod: "Credit Card",
        });
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
