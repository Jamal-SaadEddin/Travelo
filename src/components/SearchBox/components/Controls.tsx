import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Button, Stack, Typography } from "@mui/material";
import { ControlsProps } from "../entities/ControlsProps";

const Controls = ({
  title,
  count = 0,
  handleChange,
  disabled,
}: ControlsProps) => {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Typography flex={1}>{title}</Typography>
      <Button
        disabled={disabled}
        onClick={() => handleChange(title.toLowerCase(), count - 1)}
      >
        <RemoveIcon />
      </Button>
      <Typography>{count}</Typography>
      <Button
        sx={{ pr: 0 }}
        onClick={() => handleChange(title.toLowerCase(), count + 1)}
      >
        <AddIcon />
      </Button>
    </Stack>
  );
};

export default Controls;
