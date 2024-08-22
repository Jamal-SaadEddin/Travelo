import PrintIcon from "@mui/icons-material/Print";
import {
  Button,
  Container,
  Paper,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { bookingDetails } from "./constants";

const RowStack = ({
  title,
  content,
}: {
  title: string;
  content: string | number;
}) => (
  <Stack direction="row" justifyContent="space-between" spacing={2}>
    <Typography variant="body1">{title}</Typography>
    <Typography variant="body1">{content}</Typography>
  </Stack>
);

const ConfirmationPage = () => {
  return (
    <Container maxWidth="xl">
      <Toolbar
        sx={{ minHeight: { xs: "20px !important", md: "56px !important" } }}
      />
      <Paper
        elevation={3}
        sx={{ py: 5, px: { xs: 0, sm: 5 }, textAlign: "center" }}
      >
        <Typography variant="h4" gutterBottom>
          Thank you for booking with us 🎉
        </Typography>
        <Typography variant="body1" gutterBottom>
          Your booking is confirmed. You will receive an email with your booking
          details shortly.
        </Typography>
        <Container maxWidth="xs">
          <Paper sx={{ p: 2, my: 3 }}>
            <Stack gap={2}>
              <Stack direction="row" justifyContent="space-between">
                <Typography variant="h5" textAlign="left" gutterBottom>
                  Booking Details
                </Typography>
                <Button endIcon={<PrintIcon />}>Print</Button>
              </Stack>
              <RowStack
                title="Customer Name"
                content={bookingDetails.customerName}
              />
              <RowStack title="Hotel Name" content={bookingDetails.hotelName} />
              <RowStack
                title="Room Number"
                content={bookingDetails.roomNumber}
              />
              <RowStack title="Room Type" content={bookingDetails.roomType} />
              <RowStack
                title="Booking Date & Time"
                content={new Date(
                  bookingDetails?.bookingDateTime ?? Date(),
                ).toLocaleString()}
              />
              <RowStack title="Total Cost" content={bookingDetails.totalCost} />
              <RowStack
                title="Payment Method"
                content={bookingDetails.paymentMethod}
              />
              <RowStack
                title="Booking Status"
                content={bookingDetails.bookingStatus}
              />
              <RowStack
                title="Confirmation Number"
                content={bookingDetails.confirmationNumber}
              />
            </Stack>
          </Paper>
        </Container>
        <Button variant="contained" href="/">
          Return to Home Page
        </Button>
      </Paper>
    </Container>
  );
};

export default ConfirmationPage;
