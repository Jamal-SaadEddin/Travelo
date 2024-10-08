import DeleteIcon from "@mui/icons-material/Delete";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { useCity } from "@src/hooks/useCity";
import { useHotel } from "@src/hooks/useHotel";
import { useRoom } from "@src/hooks/useRoom";
import React, { useState } from "react";

interface DeleteDialogProps {
  type: "city" | "hotel" | "room";
  id: number; // ID of the entity to delete
  hotelId?: number; // Required if type is "room" or "hotel"
  cityId?: number; // Required if type is "hotel"
  name: string; // Name of the entity to display in the confirmation message
}

const DeleteDialog: React.FC<DeleteDialogProps> = ({
  type,
  id,
  hotelId,
  name,
}) => {
  const [open, setOpen] = useState(false);
  let cityId = 1;
  const [{ useDeleteCity }, { useDeleteHotel }, { useDeleteRoom }] = [
    useCity(),
    useHotel(),
    useRoom(),
  ];
  const [deleteCity, deleteHotel, deleteRoom] = [
    useDeleteCity(),
    useDeleteHotel(),
    useDeleteRoom(),
  ];

  const handleDelete = () => {
    switch (type) {
      case "city":
        deleteCity.mutate(id);
        break;
      case "hotel":
        deleteHotel.mutate({
          cityId,
          hotelId: id,
        });
        if (cityId < 9) {
          cityId++;
          handleDelete();
          return;
        }
        break;
      case "room":
        deleteRoom.mutate({
          hotelId: hotelId!,
          roomId: id,
        });
        break;
      default:
        break;
    }
    setOpen(false);
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
