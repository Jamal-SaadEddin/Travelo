import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Button, Stack, Typography } from "@mui/material";

interface Props {
  title: string;
  count: number;
}

const Controls = ({ title, count }: Props) => {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Typography flex={1}>{title}</Typography>
      <Button>
        <RemoveIcon />
      </Button>
      <Typography>{count}</Typography>
      <Button sx={{ pr: 0 }}>
        <AddIcon />
      </Button>
    </Stack>
  );
};

export default Controls;
