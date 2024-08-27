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
import { City } from "../entities";

const baseApiUrl = import.meta.env.VITE_BASE_API_URL;

interface UpdateCityDialogProps {
  city: City;
  onUpdate: (city: City) => void;
}

const UpdateCityDialog: React.FC<UpdateCityDialogProps> = ({
  city,
  onUpdate,
}) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(city.name);
  const [description, setDescription] = useState(city.description);

  const handleSubmit = () => {
    const newCity = { ...city, name, description };
    axios
      .put(`${baseApiUrl}/cities/${city.id}`, { name, description })
      .then(() => {
        onUpdate(newCity);
      })
      .catch((error) => {
        console.error("Error updating city:", error);
        onUpdate(newCity);
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
        <DialogTitle>Update City</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} mt={0.5}>
            <Grid item xs={12}>
              <TextField
                label="Name"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Description"
                fullWidth
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                multiline
                rows={4}
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

export default UpdateCityDialog;
