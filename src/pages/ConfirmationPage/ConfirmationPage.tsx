import PrintIcon from "@mui/icons-material/Print";
import {
  Button,
  Container,
  Paper,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { usePayment } from "../../hooks/usePayment";

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
  const navigate = useNavigate();

  const { useBooking } = usePayment();
  const { data: bookingDetails, isLoading } = useBooking();

  if (isLoading) {
    return <p>Loading...</p>;
  }

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
                content={bookingDetails?.customerName ?? "N/A"}
              />
              <RowStack
                title="Hotel Name"
                content={bookingDetails?.hotelName ?? "N/A"}
              />
              <RowStack
                title="Room Number"
                content={bookingDetails?.roomNumber ?? "N/A"}
              />
              <RowStack
                title="Room Type"
                content={bookingDetails?.roomType ?? "N/A"}
              />
              <RowStack
                title="Booking Date & Time"
                content={
                  bookingDetails?.bookingDateTime.toLocaleString() ?? "N/A"
                }
              />
              <RowStack
                title="Total Cost"
                content={bookingDetails?.totalCost ?? "N/A"}
              />
              <RowStack
                title="Payment Method"
                content={bookingDetails?.paymentMethod ?? "N/A"}
              />
              <RowStack
                title="Booking Status"
                content={bookingDetails?.bookingStatus ?? "N/A"}
              />
              <RowStack
                title="Confirmation Number"
                content={bookingDetails?.confirmationNumber ?? "N/A"}
              />
            </Stack>
          </Paper>
        </Container>
        <Button variant="contained" onClick={() => navigate("/")}>
          Return to Home Page
        </Button>
      </Paper>
    </Container>
  );
};

export default ConfirmationPage;
