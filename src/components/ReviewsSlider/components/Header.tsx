import CloseIcon from "@mui/icons-material/Close";
import {
  Button,
  Drawer,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { reviews } from "../constants/reviews";
import ReviewItem from "./ReviewItem";

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
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      mb={1}
    >
      <Typography variant="h4">Reviews</Typography>
      <Button sx={styles} onClick={toggleDrawer(true)}>
        View all
      </Button>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Stack sx={{ p: 2 }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            mb={2}
          >
            <Typography variant="h4">All Reviews</Typography>
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </Stack>
          <Stack spacing={2}>
            {reviews.map((review) => (
              <Paper sx={{ maxWidth: "408px" }}>
                <ReviewItem key={review.reviewId} review={review} />
              </Paper>
            ))}
          </Stack>
        </Stack>
      </Drawer>
    </Stack>
  );
};

export default Header;
