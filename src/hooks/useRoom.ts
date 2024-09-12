import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { RoomForCreationDto, RoomForUpdateDto } from "../api/Api";
import { Room } from "../entities/common/Room";
import { createApiClient } from "../services/createApiClient";

export const useRoom = () => {
  const apiClient = createApiClient();
  const queryClient = useQueryClient();

  const useAddRoom = () =>
    useMutation({
      mutationFn: ({
        hotelId,
        newRoom,
      }: {
        hotelId: number;
        newRoom: RoomForCreationDto;
      }) => apiClient.api.hotelsRoomsCreate(hotelId, newRoom),
      onSuccess: (savedRoom) => {
        const newRoom: Room = {
          roomId: savedRoom.data.id!,
          roomNumber: Number(savedRoom.data.roomNumber),
          price: savedRoom.data.cost!,
          roomPhotoUrl: "",
          roomType: "Standard",
          capacityOfAdults: 2,
          capacityOfChildren: 1,
          roomAmenities: [],
          availability: true,
        };
        queryClient
          .getQueryCache()
          .findAll({ queryKey: ["rooms"] })
          .forEach((query) => {
            queryClient.setQueryData(query.queryKey, (oldRooms: Room[]) => {
              return [...oldRooms, newRoom];
            });
          });
        toast.success("Room added successfully");
      },
      onError: () => {
        toast.error("Room creation failed");
      },
    });

  const useUpdateRoom = () =>
    useMutation({
      mutationFn: ({
        roomId,
        updatedRoom,
      }: {
        roomId: number;
        updatedRoom: RoomForUpdateDto;
      }) => apiClient.api.roomsUpdate(roomId, updatedRoom),
      onSuccess: (_, updatedRoom) => {
        queryClient
          .getQueryCache()
          .findAll({ queryKey: ["rooms"] })
          .forEach((query) => {
            queryClient.setQueryData(query.queryKey, (oldRooms: Room[]) => {
              return oldRooms.map((room) => {
                if (room.roomId === updatedRoom.roomId) {
                  return updatedRoom;
                }
                return room;
              });
            });
          });
        toast.success("Room updated successfully");
      },
      onError: () => {
        toast.error("Room update failed");
      },
    });

  const useDeleteRoom = () =>
    useMutation({
      mutationFn: ({ hotelId, roomId }: { hotelId: number; roomId: number }) =>
        apiClient.api.hotelsRoomsDelete(hotelId, roomId),
      onSuccess: (_, deletedRoom) => {
        queryClient
          .getQueryCache()
          .findAll({ queryKey: ["rooms"] })
          .forEach((query) => {
            queryClient.setQueryData(query.queryKey, (oldRooms: Room[]) => {
              return oldRooms.filter(
                (room) => room.roomId !== deletedRoom.roomId,
              );
            });
          });
        toast.success("Room deleted successfully");
      },
      onError: () => {
        toast.error("Room deletion failed");
      },
    });

  return {
    useAddRoom,
    useUpdateRoom,
    useDeleteRoom,
  };
};
