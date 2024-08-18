import { Box, Stack, ToggleButton, Typography } from "@mui/material";
import { ToggleButtonsGroupProps } from "../entities/ToggleButtonsGroupProps";
import { useStyles } from "./../../../styles/index";

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
        ))}
      </Stack>
    </Box>
  );
};

export default ToggleButtonsGroup;
