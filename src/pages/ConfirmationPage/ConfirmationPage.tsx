import PrintIcon from "@mui/icons-material/Print";
import {
  Button,
  Container,
  Paper,
  Skeleton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { usePayment } from "@src/hooks/usePayment";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const RowStack = ({
  title,
  content,
}: {
  title: string;
  content: string | number | JSX.Element;
}) => (
  <Stack direction="row" justifyContent="space-between" spacing={2}>
    <Typography variant="body1">{title}</Typography>
    <Typography variant="body1">{content}</Typography>
  </Stack>
);

const ConfirmationPage = () => {
  const navigate = useNavigate();
  const printRef = useRef<HTMLDivElement>(null); // Create a ref for the print area

  const { useBooking } = usePayment();
  const { data: bookingDetails, isLoading } = useBooking();

  // Handle the print functionality
  const handlePrint = () => {
    window.print(); // Trigger the print dialog
  };

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
            <div ref={printRef} id="print-section">
              <Stack gap={2}>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="h5" textAlign="left" gutterBottom>
                    Booking Details
                  </Typography>
                  {!isLoading && (
                    <Button onClick={handlePrint} endIcon={<PrintIcon />}>
                      Print
                    </Button>
                  )}
                </Stack>
                <RowStack
                  title="Customer Name"
                  content={
                    isLoading ? (
                      <Skeleton variant="text" animation="wave" width={120} />
                    ) : (
                      (bookingDetails?.customerName ?? "N/A")
                    )
                  }
                />
                <RowStack
                  title="Hotel Name"
                  content={
                    isLoading ? (
                      <Skeleton variant="text" animation="wave" width={120} />
                    ) : (
                      (bookingDetails?.hotelName ?? "N/A")
                    )
                  }
                />
                <RowStack
                  title="Room Number"
                  content={
                    isLoading ? (
                      <Skeleton variant="text" animation="wave" width={120} />
                    ) : (
                      (bookingDetails?.roomNumber ?? "N/A")
                    )
                  }
                />
                <RowStack
                  title="Room Type"
                  content={
                    isLoading ? (
                      <Skeleton variant="text" animation="wave" width={120} />
                    ) : (
                      (bookingDetails?.roomType ?? "N/A")
                    )
                  }
                />
                <RowStack
                  title="Booking Date & Time"
                  content={
                    isLoading ? (
                      <Skeleton variant="text" animation="wave" width={120} />
                    ) : (
                      (bookingDetails?.bookingDateTime.toLocaleString() ??
                      "N/A")
                    )
                  }
                />
                <RowStack
                  title="Total Cost"
                  content={
                    isLoading ? (
                      <Skeleton variant="text" animation="wave" width={120} />
                    ) : (
                      (bookingDetails?.totalCost ?? "N/A")
                    )
                  }
                />
                <RowStack
                  title="Payment Method"
                  content={
                    isLoading ? (
                      <Skeleton variant="text" animation="wave" width={120} />
                    ) : (
                      (bookingDetails?.paymentMethod ?? "N/A")
                    )
                  }
                />
                <RowStack
                  title="Booking Status"
                  content={
                    isLoading ? (
                      <Skeleton variant="text" animation="wave" width={120} />
                    ) : (
                      (bookingDetails?.bookingStatus ?? "N/A")
                    )
                  }
                />
                <RowStack
                  title="Confirmation Number"
                  content={
                    isLoading ? (
                      <Skeleton variant="text" animation="wave" width={120} />
                    ) : (
                      (bookingDetails?.confirmationNumber ?? "N/A")
                    )
                  }
                />
              </Stack>
            </div>
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
