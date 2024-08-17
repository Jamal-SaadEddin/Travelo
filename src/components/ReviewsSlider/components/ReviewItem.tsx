import StarIcon from "@mui/icons-material/Star";
import { Avatar, Stack, Typography } from "@mui/material";
import { truncateText } from "../../../services/truncateText";
import { ReviewItemProps } from "../entities/ReviewItemProps";
import { stringAvatar } from "../utils/stringAvatar";

const ReviewItem = ({ review }: ReviewItemProps) => {
  const { children, bgcolor } = stringAvatar(review.customerName);

  return (
    <Stack
      p={2}
      gap={2}
      justifyContent="space-between"
      height="fit-content"
      maxHeight="160px"
    >
      <Typography variant="body1">
        “{truncateText(review.description, 100)}”
      </Typography>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            gap={1}
          >
            <Avatar
              sx={{ width: 32, height: 32, fontSize: "1rem", bgcolor: bgcolor }}
              children={children}
            />
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
