import Edit from "@mui/icons-material/Edit";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { AdminHotel, Hotel } from "@src/entities/common/Hotel";
import { Room } from "@src/entities/common/Room";
import { useRoom } from "@src/hooks/useRoom";
import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import FormikTextField from "../FormikTextField";

interface RoomDialogProps {
  type: "add" | "update";
  room?: Room; // Only required for the update type
  selectedHotel?: number | null; // Only required for the add type
  hotels?: Hotel[]; // Only required for the add type
  onSubmit: (room: Room) => void;
}

const initialAddValues: Partial<Room> = {
  roomNumber: null,
  price: null,
};

const validationSchema = Yup.object({
  roomNumber: Yup.number().required("Room number is required"),
  price: Yup.number().required("Price is required").min(0),
});

const RoomDialog: React.FC<RoomDialogProps> = ({
  type,
  room,
  selectedHotel,
  hotels,
  onSubmit,
}) => {
  const [open, setOpen] = useState(false);
  const [hotelId, setHotelId] = useState<number | null>(selectedHotel!);

  const { useAddRoom, useUpdateRoom } = useRoom();
  const addRoom = useAddRoom();
  const updateRoom = useUpdateRoom();

  useEffect(() => {
    if (selectedHotel) {
      setHotelId(selectedHotel);
    }
  }, [selectedHotel]);

  const initialUpdateValues: Partial<Room> = {
    roomNumber: room?.roomNumber,
    price: room?.price,
  };

  const isUpdateMode = type === "update";
  const initialValues = isUpdateMode ? initialUpdateValues : initialAddValues;

  const handleSubmit = (values: Partial<Room>) => {
    if (isUpdateMode && room) {
      updateRoom.mutate({
        roomId: room.roomId,
        updatedRoom: {
          roomNumber: values.roomNumber!.toString(),
          cost: values.price!,
        },
      });
      const updatedRoom: Room = {
        ...room,
        roomNumber: values.roomNumber!,
        price: values.price!,
      };
      onSubmit(updatedRoom);
    } else {
      addRoom.mutate({
        hotelId: hotelId!,
        newRoom: {
          roomNumber: values.roomNumber!.toString(),
          cost: values.price!,
        },
      });
      const newRoom: Room = {
        roomId: Math.floor(Math.random() * 1000) + 1,
        roomNumber: values.roomNumber!,
        price: values.price!,
        roomPhotoUrl: "",
        roomType: "Standard",
        capacityOfAdults: 2,
        capacityOfChildren: 1,
        roomAmenities: [],
        availability: true,
      };
      onSubmit(newRoom);
    }
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
        {isUpdateMode ? "Edit" : "Add Room"}
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>
          {isUpdateMode
            ? "Update Room"
            : `Add New Room to ${hotels?.find((hotel): hotel is AdminHotel => (hotel as AdminHotel).id === selectedHotel)?.name} Hotel`}
        </DialogTitle>
        <DialogContent>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <FormikTextField
                name="roomNumber"
                label="Room Number"
                type="number"
                fullWidth
              />
              <FormikTextField
                name="price"
                label="Price"
                type="number"
                fullWidth
                inputProps={{ min: 0 }}
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

export default RoomDialog;
