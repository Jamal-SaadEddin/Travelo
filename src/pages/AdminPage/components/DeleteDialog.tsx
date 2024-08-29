import DeleteIcon from "@mui/icons-material/Delete";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

const baseApiUrl = import.meta.env.VITE_BASE_API_URL;

interface DeleteDialogProps {
  type: "city" | "hotel" | "room";
  id: number; // ID of the entity to delete
  hotelId?: number; // Required if type is "room" or "hotel"
  cityId?: number; // Required if type is "hotel"
  name: string; // Name of the entity to display in the confirmation message
  onDelete: () => void; // Callback to be called after successful deletion
}

const DeleteDialog: React.FC<DeleteDialogProps> = ({
  type,
  id,
  hotelId,
  cityId,
  name,
  onDelete,
}) => {
  const [open, setOpen] = useState(false);

  const handleDelete = () => {
    let apiUrl = "";

    switch (type) {
      case "city":
        apiUrl = `${baseApiUrl}/cities/${id}`;
        break;
      case "hotel":
        apiUrl = `${baseApiUrl}/cities/${cityId}/hotels/${id}`;
        break;
      case "room":
        apiUrl = `${baseApiUrl}/hotels/${hotelId}/rooms/${id}`;
        break;
      default:
        console.error("Unknown type");
        return;
    }

    axios
      .delete(apiUrl)
      .then(() => {
        onDelete();
        setOpen(false);
      })
      .catch((error) => {
        console.error(`Error deleting ${type}:`, error);
      });
  };

  const getDialogTitle = () => {
    switch (type) {
      case "city":
        return "Delete City";
      case "hotel":
        return "Delete Hotel";
      case "room":
        return "Delete Hotel Room";
      default:
        return "Delete Item";
    }
  };

  const getDialogMessage = () => {
    switch (type) {
      case "city":
        return `Are you sure you want to delete the city "${name}"?`;
      case "hotel":
        return `Are you sure you want to delete the hotel "${name}"?`;
      case "room":
        return `Are you sure you want to delete the "${name}" room?`;
      default:
        return `Are you sure you want to delete this item?`;
    }
  };

  return (
    <>
      <Button
        variant="contained"
        color="error"
        onClick={() => setOpen(true)}
        endIcon={<DeleteIcon />}
      >
        Delete
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>{getDialogTitle()}</DialogTitle>
        <DialogContent>
          <p>{getDialogMessage()}</p>
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button onClick={() => setOpen(false)} color="error">
            Cancel
          </Button>
          <Button onClick={handleDelete} variant="contained" color="error">
            Yes, Sure!
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeleteDialog;
