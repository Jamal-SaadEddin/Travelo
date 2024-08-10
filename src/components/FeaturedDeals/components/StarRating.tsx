import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Stack } from "@mui/material";
import { Fragment } from "react/jsx-runtime";
import { StarRatingProps } from "../entities/StarRatingProps";

const StarRating = ({ value }: StarRatingProps) => {
  return (
    <Stack direction="row">
      {Array.from({ length: 5 }).map((_, index) => (
        <Fragment key={index}>
          {index < value ? (
            <StarIcon color="primary" />
          ) : (
            <StarBorderIcon color="primary" />
          )}
        </Fragment>
      ))}
    </Stack>
  );
};

export default StarRating;
