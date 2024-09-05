import { useMutation, useQueryClient } from "@tanstack/react-query";
import { RoomForCreationDto, RoomForUpdateDto } from "../api/Api";
import { Room } from "../entities/Room";
import { createApiClient } from "../services/createApiClient";

const apiClient = createApiClient();

export const useRoom = () => {
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
      },
    });

  return {
    useAddRoom,
    useUpdateRoom,
    useDeleteRoom,
  };
};
