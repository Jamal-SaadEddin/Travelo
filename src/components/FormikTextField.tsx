import TextField, { TextFieldProps } from "@mui/material/TextField";
import { Field, useField } from "formik";
import React from "react";

interface FormikTextFieldProps {
  name: string;
  label: string;
}

const FormikTextField: React.FC<FormikTextFieldProps & TextFieldProps> = (
  props,
) => {
  const [field, meta] = useField(props.name);
  return (
    <Field name={props.name}>
      {() => (
        <TextField
          {...field}
          {...props}
          label={props.label}
          error={meta.touched && Boolean(meta.error)}
          helperText={meta.touched && meta.error}
          fullWidth
          margin="normal"
        />
      )}
    </Field>
  );
};

export default FormikTextField;
