import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  MenuItem,
} from "@mui/material";
import axios from "axios";
import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import FormikTextField from "../../../components/FormikTextField";
import { City, Hotel } from "../entities";

const baseApiUrl = import.meta.env.VITE_BASE_API_URL;

interface AddHotelDialogProps {
  onAdd: (hotel: Hotel) => void;
}

const initialValues: Hotel = {
  name: "",
  cityId: null,
  hotelType: null,
  latitude: null,
  longitude: null,
  starRating: null,
  description: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Hotel name is required"),
  cityId: Yup.number().required("City is required"),
  hotelType: Yup.number().required("Hotel type is required").max(10).min(1),
  latitude: Yup.number().required("Latitude is required").max(180).min(-180),
  longitude: Yup.number().required("Longitude is required").max(180).min(-180),
  starRating: Yup.number().required("Rating is required").max(5).min(0),
  description: Yup.string().required("Description is required").max(180),
});

const AddHotelDialog: React.FC<AddHotelDialogProps> = ({ onAdd }) => {
  const [open, setOpen] = useState(false);
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

  const handleSubmit = (values: Hotel) => {
    axios
      .post(`${baseApiUrl}/cities/${values.cityId}/hotels`, values)
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
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <Grid container spacing={2} mt={0.5}>
                <Grid item xs={12}>
                  <FormikTextField name="name" label="Hotel name" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <FormikTextField
                      name="cityId"
                      label="City"
                      fullWidth
                      select
                    >
                      {cities.map((city) => (
                        <MenuItem key={city.id} value={city.id}>
                          {city.name}
                        </MenuItem>
                      ))}
                    </FormikTextField>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormikTextField
                    name="hotelType"
                    label="Hotel Type"
                    placeholder="1 to 10"
                    maxLength={2}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormikTextField
                    name="latitude"
                    label="Latitude"
                    maxLength={4}
                    placeholder="-180 to 180"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormikTextField
                    name="longitude"
                    label="Longitude"
                    maxLength={4}
                    placeholder="-180 to 180"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormikTextField
                    name="starRating"
                    label="Rating"
                    maxLength={1}
                    placeholder="0 to 5"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormikTextField
                    name="description"
                    label="Description"
                    inputProps={{ maxLength: 180 }}
                    multiline
                    rows={4}
                    fullWidth
                  />
                </Grid>
              </Grid>
              <DialogActions sx={{ py: 1, px: 0 }}>
                <Button onClick={() => setOpen(false)}>Cancel</Button>
                <Button type="submit" variant="contained">
                  Add
                </Button>
              </DialogActions>
            </Form>
          </Formik>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddHotelDialog;
