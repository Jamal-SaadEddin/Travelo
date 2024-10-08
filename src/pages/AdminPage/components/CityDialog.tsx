import Edit from "@mui/icons-material/Edit";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import FormikTextField from "@src/components/common/FormikTextField";
import { City } from "@src/entities/common/City";
import { useCity } from "@src/hooks/useCity";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";

interface CityDialogProps {
  type: "add" | "update";
  city?: City; // Only required for the update type
  onSubmit: (city: City) => void;
}

const initialAddValues: City = {
  name: "",
  description: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("City name is required").max(50),
  description: Yup.string().required("Description is required").max(1200),
});

const CityDialog: React.FC<CityDialogProps> = ({ type, city, onSubmit }) => {
  const [open, setOpen] = useState(false);
  const { useAddCity, useUpdateCity } = useCity();
  const addCity = useAddCity();
  const updateCity = useUpdateCity();

  const initialUpdateValues: City = {
    name: city?.name as string,
    description: city?.description as string,
  };

  const isUpdateMode = type === "update";
  const initialValues = isUpdateMode ? initialUpdateValues : initialAddValues;

  const handleSubmit = (values: City) => {
    if (isUpdateMode) updateCity.mutate({ id: city!.id!, ...values });
    else addCity.mutate(values);

    onSubmit({
      id: Math.floor(Math.random() * 1000),
      ...values,
    });
    setOpen(false);
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={() => setOpen(true)}
        color={isUpdateMode ? "info" : "primary"}
        endIcon={isUpdateMode ? <Edit /> : null}
        sx={{ minWidth: 110 }}
      >
        {isUpdateMode ? "Edit" : "Add City"}
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>
          {isUpdateMode ? "Update City" : "Add New City"}
        </DialogTitle>
        <DialogContent>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <FormikTextField
                name="name"
                label="City name"
                fullWidth
                maxLength={50}
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

export default CityDialog;
