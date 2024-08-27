import EditIcon from "@mui/icons-material/Edit";
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
import { Hotel } from "../entities";

const baseApiUrl = import.meta.env.VITE_BASE_API_URL;

interface UpdateHotelDialogProps {
  hotel: Hotel;
  onUpdate: (hotel: Hotel) => void;
}

const UpdateHotelDialog: React.FC<UpdateHotelDialogProps> = ({
  hotel,
  onUpdate,
}) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(hotel.name);
  const [hotelType, setHotelType] = useState(hotel.hotelType);
  const [latitude, setLatitude] = useState(hotel.latitude);
  const [longitude, setLongitude] = useState(hotel.longitude);
  const [rating, setRating] = useState(hotel.starRating);
  const [description, setDescription] = useState(hotel.description);

  const handleSubmit = () => {
    const updatedHotel = {
      id: hotel.id,
      name,
      description,
      hotelType,
      starRating: rating,
      latitude,
      longitude,
    };
    axios
      .put(`${baseApiUrl}/hotels/${hotel.id}`, updatedHotel)
      .then(() => {
        onUpdate(updatedHotel);
      })
      .catch((error) => {
        console.error("Error updating hotel:", error);
      })
      .finally(() => {
        setOpen(false);
      });
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={() => setOpen(true)}
        endIcon={<EditIcon />}
        color="info"
      >
        Edit
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Update Hotel</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} mt={0.5}>
            <Grid item xs={12}>
              <TextField
                label="Hotel name"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Hotel Type"
                fullWidth
                value={hotelType}
                onChange={(e) => setHotelType(Number(e.target.value))}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Latitude"
                fullWidth
                value={latitude}
                onChange={(e) => setLatitude(Number(e.target.value))}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Longitude"
                fullWidth
                value={longitude}
                onChange={(e) => setLongitude(Number(e.target.value))}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Rating"
                fullWidth
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Description"
                fullWidth
                value={description}
                onChange={(e) => setDescription(e.target.value)}
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

export default UpdateHotelDialog;
