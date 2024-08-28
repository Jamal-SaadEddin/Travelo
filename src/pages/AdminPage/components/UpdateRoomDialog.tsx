import Edit from "@mui/icons-material/Edit";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { Room } from "../../../entities";

const baseApiUrl = import.meta.env.VITE_BASE_API_URL;

interface UpdateRoomDialogProps {
  onUpdate: (newRoom: Room) => void;
  room: Room;
}

const UpdateRoomDialog: React.FC<UpdateRoomDialogProps> = ({
  onUpdate,
  room,
}) => {
  const [open, setOpen] = useState(false);
  const [roomNumber, setRoomNumber] = useState(room.roomNumber.toString());
  const [cost, setCost] = useState(room.price.toString());

  const handleSubmit = () => {
    axios
      .put(`${baseApiUrl}/rooms/${room.roomId}`, { roomNumber, cost })
      .then(() => {
        const updatedRoom: Room = {
          ...room,
          roomNumber: parseInt(roomNumber),
          price: parseInt(cost),
        };
        onUpdate(updatedRoom);
        setOpen(false);
      })
      .catch((error) => {
        console.error("Error updating room:", error);
      });
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={() => setOpen(true)}
        color="info"
        endIcon={<Edit />}
      >
        Edit
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Update Room</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} mt={0.5}>
            <Grid item xs={12}>
              <TextField
                label="Room Number"
                fullWidth
                value={roomNumber}
                onChange={(e) => setRoomNumber(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Cost"
                fullWidth
                value={cost}
                onChange={(e) => setCost(e.target.value)}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
          <Button onClick={() => setOpen(false)} color="info">
            Cancel
          </Button>
          <Button onClick={handleSubmit} variant="contained" color="info">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default UpdateRoomDialog;
