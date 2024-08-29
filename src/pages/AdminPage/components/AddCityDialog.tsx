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

interface AddCityDialogProps {
  onAdd: (city: City) => void;
}

const AddCityDialog: React.FC<AddCityDialogProps> = ({ onAdd }) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    axios
      .post(`${baseApiUrl}/cities`, { name, description })
      .then((response) => {
        onAdd(response.data);
      })
      .catch((error) => {
        console.error("Error adding city:", error);
      })
      .finally(() => {
        setName("");
        setDescription("");
        setOpen(false);
      });
  };

  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Add City
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Add New City</DialogTitle>
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

export default AddCityDialog;
