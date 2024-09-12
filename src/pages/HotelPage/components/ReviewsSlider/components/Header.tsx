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
import ReviewItem from "./ReviewItem";
import { Review } from "../../../../../entities/common/Review";

const styles = {
  textTransform: "none",
  fontSize: "1rem",
  textDecoration: "underline",
  "&:hover": {
    textDecoration: "underline",
    backgroundColor: "transparent",
  },
};

interface HeaderProps {
  reviews: Review[];
}

const Header = ({ reviews }: HeaderProps) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Typography variant="h5">Reviews</Typography>
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
            <Typography variant="h5">All Reviews</Typography>
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </Stack>
          <Stack spacing={2}>
            {reviews.map((review) => (
              <Paper key={review.reviewId} sx={{ maxWidth: "408px" }}>
                <ReviewItem review={review} />
              </Paper>
            ))}
          </Stack>
        </Stack>
      </Drawer>
    </Stack>
  );
};

export default Header;
