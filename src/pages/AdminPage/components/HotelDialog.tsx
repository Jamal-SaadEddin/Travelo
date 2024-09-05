import Edit from "@mui/icons-material/Edit";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
} from "@mui/material";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import FormikTextField from "../../../components/FormikTextField";
import { useCities } from "../../../hooks/useCities";
import { useHotel } from "../../../hooks/useHotel";
import { Hotel } from "../entities";

interface HotelDialogProps {
  type: "add" | "update";
  hotel?: Hotel; // Only required for the update type
  onSubmit: (hotel: Hotel) => void;
}

const initialAddValues: Hotel = {
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
  description: Yup.string().required("Description is required").max(1200),
});

const HotelDialog: React.FC<HotelDialogProps> = ({ type, hotel, onSubmit }) => {
  const [open, setOpen] = useState(false);
  const { data: cities } = useCities();
  const { useAddHotel, useUpdateHotel } = useHotel();
  const addHotel = useAddHotel();
  const updateHotel = useUpdateHotel();

  const initialUpdateValues: Hotel = {
    id: hotel?.id,
    name: hotel?.name || "",
    cityId: hotel?.cityId || null,
    hotelType: hotel?.hotelType as number,
    latitude: hotel?.latitude as number,
    longitude: hotel?.longitude as number,
    starRating: hotel?.starRating as number,
    description: hotel?.description || "",
  };

  const isUpdateMode = type === "update";
  const initialValues = isUpdateMode ? initialUpdateValues : initialAddValues;

  const handleSubmit = (values: Hotel) => {
    if (isUpdateMode) updateHotel.mutate(values);
    else addHotel.mutate(values);

    onSubmit(values);
    setOpen(false);
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={() => setOpen(true)}
        color={isUpdateMode ? "info" : "primary"}
        endIcon={isUpdateMode ? <Edit /> : null}
      >
        {isUpdateMode ? "Edit" : "Add Hotel"}
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>
          {isUpdateMode ? "Update Hotel" : "Add New Hotel"}
        </DialogTitle>
        <DialogContent>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <FormikTextField name="name" label="Hotel name" fullWidth />
              {!isUpdateMode && (
                <FormikTextField name="cityId" label="City" fullWidth select>
                  {cities?.map((city) => (
                    <MenuItem key={city.id} value={city.id}>
                      {city.name}
                    </MenuItem>
                  ))}
                </FormikTextField>
              )}
              <FormikTextField
                name="hotelType"
                label="Hotel Type"
                placeholder="1 to 10"
                maxLength={2}
                fullWidth
              />
              <FormikTextField
                name="latitude"
                label="Latitude"
                placeholder="-180 to 180"
                fullWidth
              />
              <FormikTextField
                name="longitude"
                label="Longitude"
                placeholder="-180 to 180"
                fullWidth
              />
              <FormikTextField
                name="starRating"
                label="Rating"
                maxLength={1}
                placeholder="0 to 5"
                fullWidth
              />
              <FormikTextField
                name="description"
                label="Description"
                maxLength={1200}
                multiline
                rows={4}
                fullWidth
              />
              <DialogActions sx={{ py: 1, px: 0 }}>
                <Button
                  onClick={() => setOpen(false)}
                  color={isUpdateMode ? "info" : "primary"}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  color={isUpdateMode ? "info" : "primary"}
                >
                  {isUpdateMode ? "Update" : "Add"}
                </Button>
              </DialogActions>
            </Form>
          </Formik>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default HotelDialog;
