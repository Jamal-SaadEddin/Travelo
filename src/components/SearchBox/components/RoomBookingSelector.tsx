import { Box, Button, Fade, Menu, Stack } from "@mui/material";
import React from "react";
import { RoomInfo } from "../entities/RoomInfo";
import Controls from "./Controls";

interface Props {
  roomInfo: RoomInfo;
  handleChange: (name: string, count: number) => void;
}

const RoomBookingSelector = ({ roomInfo, handleChange }: Props) => {
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
          <Controls
            title="Adults"
            count={adults}
            disabled={adults === 1}
            handleChange={handleChange}
          />
          <Controls
            title="Children"
            count={children}
            disabled={children === 0}
            handleChange={handleChange}
          />
          <Controls
            title="Rooms"
            count={rooms}
            disabled={rooms === 1}
            handleChange={handleChange}
          />
          <Button fullWidth variant="contained" onClick={handleClose}>
            Done
          </Button>
        </Stack>
      </Menu>
    </Box>
  );
};

export default RoomBookingSelector;
