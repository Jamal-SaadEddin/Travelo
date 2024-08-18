import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Stack } from "@mui/material";
import { Fragment } from "react/jsx-runtime";
import { StarRatingProps } from "./entities/StarRatingProps";

const StarRating = ({ value, large }: StarRatingProps) => {
  const fontSize = large ? "large" : "medium";

  return (
    <Stack direction="row">
      {Array.from({ length: 5 }).map((_, index) => (
        <Fragment key={index}>
          {index < value ? (
            <StarIcon fontSize={fontSize} color="primary" />
          ) : (
            <StarBorderIcon fontSize={fontSize} color="primary" />
          )}
        </Fragment>
      ))}
    </Stack>
  );
};

export default StarRating;
