import StarIcon from "@mui/icons-material/Star";
import { Avatar, Stack, Typography } from "@mui/material";
import { truncateText } from "../../../services/truncateText";
import { ReviewItemProps } from "../entities/ReviewItemProps";
import { stringAvatar } from "../utils/stringAvatar";

const ReviewItem = ({ review }: ReviewItemProps) => {
  return (
    <Stack p={2} gap={2} justifyContent="space-between" height="156px">
      <Typography variant="body1">
        “{truncateText(review.description, 100)}”
      </Typography>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h6" align="center">
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            gap={1}
          >
            <Avatar {...stringAvatar(review.customerName)} />
            {review.customerName}
          </Stack>
        </Typography>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          {Array.from({ length: review.rating }).map((_, index) => (
            <StarIcon key={index} fontSize="small" color="primary" />
          ))}
          {review.rating}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ReviewItem;
