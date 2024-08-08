import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box, Button, Fade, Menu, Stack, Typography } from "@mui/material";
import React from "react";

interface Props {
  roomInfo: RoomInfo;
}

interface RoomInfo {
  adults: number;
  children: number;
  rooms: number;
}

const RoomBookingSelector = ({ roomInfo }: Props) => {
  const { adults, children, rooms } = roomInfo;

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box width="100%" height="100%">
      <Button
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        color="inherit"
        fullWidth
        sx={{ height: "100%" }}
        variant="outlined"
      >
        {adults} Adults, {children} Children, {rooms} Rooms
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <Stack gap={2} py={1} px={3}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography flex={1}>Adults</Typography>
            <Button>
              <RemoveIcon />
            </Button>
            <Typography>{adults}</Typography>
            <Button sx={{ pr: 0 }}>
              <AddIcon />
            </Button>
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography flex={1}>Children</Typography>
            <Button>
              <RemoveIcon />
            </Button>
            <Typography>{children}</Typography>
            <Button sx={{ pr: 0 }}>
              <AddIcon />
            </Button>
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography flex={1}>Rooms</Typography>
            <Button>
              <RemoveIcon />
            </Button>
            <Typography>{rooms}</Typography>
            <Button sx={{ pr: 0 }}>
              <AddIcon />
            </Button>
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Button fullWidth variant="contained" onClick={handleClose}>
              Done
            </Button>
          </Stack>
        </Stack>
      </Menu>
    </Box>
  );
};

export default RoomBookingSelector;
