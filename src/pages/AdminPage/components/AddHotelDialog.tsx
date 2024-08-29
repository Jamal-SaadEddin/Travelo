import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { City, Hotel } from "../entities";

const baseApiUrl = import.meta.env.VITE_BASE_API_URL;

interface AddHotelDialogProps {
  onAdd: (hotel: Hotel) => void;
}

const AddHotelDialog: React.FC<AddHotelDialogProps> = ({ onAdd }) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [cityId, setCityId] = useState<number | null>(null);
  const [hotelType, setHotelType] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [rating, setRating] = useState("");
  const [cities, setCities] = useState<City[]>([]);

  useEffect(() => {
    axios
      .get(`${baseApiUrl}/cities`)
      .then((response) => {
        if (Array.isArray(response.data)) {
          setCities(response.data);
        } else {
          console.error(
            "Unexpected API response, expected an array:",
            response.data,
          );
          setCities([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching cities:", error);
        setCities([]); // Set to empty array in case of error to avoid further issues
      });
  }, []);

  const handleSubmit = () => {
    axios
      .post(`${baseApiUrl}/cities/${cityId}/hotels`, {
        name,
        hotelType,
        latitude,
        longitude,
        rating,
      })
      .then((response) => {
        onAdd(response.data);
        setOpen(false);
      });
  };

  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Add Hotel
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Add New Hotel</DialogTitle>
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
              <FormControl fullWidth>
                <InputLabel>City</InputLabel>
                <Select
                  label="City"
                  fullWidth
                  value={cityId?.toString() || ""}
                  onChange={(e) => setCityId(parseInt(e.target.value, 10))}
                >
                  {cities.map((city) => (
                    <MenuItem key={city.id} value={city.id}>
                      {city.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Hotel Type"
                fullWidth
                value={hotelType}
                onChange={(e) => setHotelType(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Latitude"
                fullWidth
                value={latitude}
                onChange={(e) => setLatitude(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Longitude"
                fullWidth
                value={longitude}
                onChange={(e) => setLongitude(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Rating"
                fullWidth
                value={rating}
                onChange={(e) => setRating(e.target.value)}
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

export default AddHotelDialog;
