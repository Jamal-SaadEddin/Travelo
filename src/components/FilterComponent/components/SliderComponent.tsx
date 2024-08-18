import { Box, Slider, Typography } from "@mui/material";
import { useStyles } from "../../../styles";
import { SliderComponentProps } from "../entities/SliderComponentProps";

const SliderComponent = ({
  title,
  value,
  handleValueChange,
  steps,
  minValue,
  maxValue,
  valueLabelFormat,
  ariaLabelledBy,
}: SliderComponentProps) => {
  const { filterComponentStyles } = useStyles();

  return (
    <Box my={2}>
      <Typography variant="subtitle1" color={filterComponentStyles.titleColor}>
        {title}
      </Typography>
      <Slider
        value={value}
        onChange={handleValueChange}
        valueLabelDisplay="on"
        step={steps}
        marks
        min={minValue}
        max={maxValue}
        valueLabelFormat={valueLabelFormat}
        aria-labelledby={ariaLabelledBy}
        sx={filterComponentStyles.slider}
      />
    </Box>
  );
};

export default SliderComponent;
