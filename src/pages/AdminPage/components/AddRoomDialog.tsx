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
import React, { useEffect, useState } from "react";
import { Room } from "../../../entities";
import { Hotel } from "../entities";

const baseApiUrl = import.meta.env.VITE_BASE_API_URL;

interface AddRoomDialogProps {
  onAdd: (newRoom: Room) => void;
  selectedHotel: number | null;
  hotels: Hotel[];
}

const AddRoomDialog: React.FC<AddRoomDialogProps> = ({
  onAdd,
  selectedHotel,
  hotels,
}) => {
  const [open, setOpen] = useState(false);
  const [roomNumber, setRoomNumber] = useState("");
  const [cost, setCost] = useState("");
  const [hotelId, setHotelId] = useState<number | null>(selectedHotel);

  useEffect(() => {
    setHotelId(selectedHotel); // Sync with selected hotel in the main component
  }, [selectedHotel]);

  const handleSubmit = () => {
    axios
      .post(`${baseApiUrl}/hotels/${hotelId}/rooms`, { roomNumber, cost })
      .then(() => {
        const newRoom = {
          roomId: Math.floor(Math.random() * 1000) + 1,
          roomNumber: parseInt(roomNumber),
          roomPhotoUrl: "",
          roomType: "Standard",
          capacityOfAdults: 2,
          capacityOfChildren: 1,
          roomAmenities: [],
          price: parseInt(cost),
          availability: true,
        };
        onAdd(newRoom);
        setOpen(false);
      });
  };

  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Add Room
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>
          Add New Room to{" "}
          {hotels.find((hotel) => hotel.id === selectedHotel)?.name} Hotel
        </DialogTitle>
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
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddRoomDialog;
