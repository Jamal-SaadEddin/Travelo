import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ReviewItem from "./components/ReviewItem";
import { reviews } from "./constants/reviews";
import "./styles.css";
import { Paper, Typography } from "@mui/material";

const ReviewsSlider = () => {
  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom>
        Reviews
      </Typography>
      <Slider infinite={false} className="slider-container">
        {reviews.slice(0, 5).map((review) => (
          <ReviewItem key={review.reviewId} review={review} />
        ))}
      </Slider>
    </Paper>
  );
};

export default ReviewsSlider;
