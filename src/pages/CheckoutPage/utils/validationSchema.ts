import * as yup from "yup";

export const validationSchema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email address is required"),
  cardNumber: yup
    .number()
    .typeError("Card number must be a number")
    .required("Card number is required"),
  expirationDate: yup
    .string()
    .required("Expiration date is required")
    .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, "Invalid date format")
    .test("expirationDate", "Card has expired", function (value) {
      if (!value) return false;
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      const currentMonth = currentDate.getMonth() + 1;
      const [month, year] = value.split("/");
      return (
        parseInt(year, 10) + 2000 > currentYear ||
        (parseInt(year, 10) + 2000 === currentYear &&
          parseInt(month, 10) >= currentMonth)
      );
    }),
  cvc: yup
    .number()
    .typeError("CVC must be a number")
    .required("CVC is required"),
  zip: yup.string().required("ZIP code is required"),
});
