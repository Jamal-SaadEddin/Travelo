import {
  Box,
  Fade,
  Stack,
  ToggleButton,
  Tooltip,
  Typography,
} from "@mui/material";
import { useStyles } from "../../../../../styles/index";

export interface ToggleButtonsGroupProps {
  title: string;
  buttons: { name: string; description?: string; icon?: JSX.Element }[];
  selectedButtons: string[];
  toggleButton: (buttonName: string) => void;
}

const ToggleButtonsGroup = ({
  title,
  buttons,
  selectedButtons,
  toggleButton,
}: ToggleButtonsGroupProps) => {
  const { filterComponentStyles } = useStyles();

  return (
    <Box my={2}>
      <Typography variant="subtitle1" color={filterComponentStyles.titleColor}>
        {title}
      </Typography>
      <Stack direction="row" gap={1} my={1} flexWrap="wrap">
        {buttons.map((button) => (
          <Tooltip
            title={button.description}
            arrow
            placement="top"
            TransitionComponent={Fade}
          >
            <ToggleButton
              key={button.name}
              value={button.name}
              size="large"
              disableRipple
              selected={selectedButtons.includes(button.name)}
              onChange={() => toggleButton(button.name)}
              sx={{
                ...filterComponentStyles.toggleButton,
                backgroundColor: selectedButtons.includes(button.name)
                  ? "primary.main"
                  : "",
              }}
            >
              {button.icon} {button.name}
            </ToggleButton>
          </Tooltip>
        ))}
      </Stack>
    </Box>
  );
};

export default ToggleButtonsGroup;
