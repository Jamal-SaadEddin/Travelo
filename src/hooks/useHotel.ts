import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Hotel } from "../pages/AdminPage/entities";
import { createApiClient } from "../services/createApiClient";
import { HotelForCreationDto, HotelForUpdateDto } from "../api/Api";

const apiClient = createApiClient();

export const useHotel = () => {
  const queryClient = useQueryClient();

  const useAddHotel = () =>
    useMutation({
      mutationFn: (newHotel: Hotel) =>
        apiClient.api.citiesHotelsCreate(
          newHotel.cityId!,
          newHotel as HotelForCreationDto,
        ),
      onSuccess: (savedHotel) => {
        queryClient
          .getQueryCache()
          .findAll({ queryKey: ["hotels"] })
          .forEach((query) => {
            queryClient.setQueryData(query.queryKey, (oldhotels: Hotel[]) => {
              return [...oldhotels, savedHotel];
            });
          });
      },
    });

  const useUpdateHotel = () =>
    useMutation({
      mutationFn: (updatedHotel: Hotel) =>
        apiClient.api.hotelsUpdate(
          updatedHotel.id!,
          updatedHotel as HotelForUpdateDto,
        ),
      onSuccess: (_, updatedHotel: Hotel) => {
        queryClient
          .getQueryCache()
          .findAll({ queryKey: ["hotels"] })
          .forEach((query) => {
            queryClient.setQueryData(query.queryKey, (oldHotels: Hotel[]) => {
              return oldHotels.map((hotel) => {
                if (hotel.id === updatedHotel.id) {
                  return updatedHotel;
                }
                return hotel;
              });
            });
          });
      },
    });

  const useDeleteHotel = () =>
    useMutation({
      mutationFn: ({ cityId, hotelId }: { cityId: number; hotelId: number }) =>
        apiClient.api.citiesHotelsDelete(cityId, hotelId),
      onSuccess: (_, deletedHotel) => {
        queryClient
          .getQueryCache()
          .findAll({ queryKey: ["hotels"] })
          .forEach((query) => {
            queryClient.setQueryData(query.queryKey, (oldHotels: Hotel[]) =>
              oldHotels.filter((hotel) => hotel.id !== deletedHotel.hotelId),
            );
          });
      },
    });

  return {
    useAddHotel,
    useUpdateHotel,
    useDeleteHotel,
  };
};