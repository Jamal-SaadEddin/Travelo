import { Paper } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Header from "./components/Header";
import ReviewItem from "./components/ReviewItem";
import { ReviewsSliderProps } from "./entities/ReviewsSliderProps";
import "./styles.css";

const ReviewsSlider = ({ reviews }: ReviewsSliderProps) => {
  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <Header />
      <Slider infinite={false} className="slider-container">
        {reviews.slice(0, 5).map((review) => (
          <ReviewItem key={review.reviewId} review={review} />
        ))}
      </Slider>
    </Paper>
  );
};

export default ReviewsSlider;
