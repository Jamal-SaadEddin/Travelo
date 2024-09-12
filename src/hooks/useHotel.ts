import {
  HotelDto,
  HotelForCreationDto,
  HotelForUpdateDto,
  HttpResponse,
  ProblemDetails,
} from "@src/api/Api";
import { AdminHotel as Hotel } from "@src/entities/common/Hotel";
import { createApiClient } from "@src/services/createApiClient";
import useCurrentPageStore from "@src/store/currentPage.store";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useHotel = () => {
  const apiClient = createApiClient();
  const queryClient = useQueryClient();

  const useAddHotel = (newHotel: Hotel) => {
    let response: HttpResponse<HotelDto, ProblemDetails> | undefined;

    return useMutation({
      mutationFn: async () => {
        response = await apiClient.api.citiesHotelsCreate(
          newHotel.cityId!,
          newHotel as HotelForCreationDto,
        );
      },
      onSuccess: () => {
        toast.success("Hotel added successfully");
        response = undefined;
        queryClient
          .getQueryCache()
          .findAll({ queryKey: ["hotels"] })
          .forEach((query) => {
            queryClient.setQueryData(query.queryKey, (oldhotels: Hotel[]) => {
              return [newHotel, ...oldhotels];
            });
          });
      },
      onError: () => {
        if (response) toast.error("Hotel creation failed");
        response = undefined;
      },
    });
  };

  const useUpdateHotel = () => {
    let response: HttpResponse<void, ProblemDetails> | undefined;

    return useMutation({
      mutationFn: async (updatedHotel: Hotel) => {
        response = await apiClient.api.hotelsUpdate(
          updatedHotel.id!,
          updatedHotel as HotelForUpdateDto,
        );
      },
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
      onError: () => {
        if (response && response.status === 204) {
          toast.success("Hotel updated successfully");
          const data = response.data;
          response = undefined;
          return data;
        }
        toast.error("Hotel update failed");
      },
    });
  };

  const useDeleteHotel = () => {
    let response: HttpResponse<void, ProblemDetails> | undefined;
    let deletedHotelId: number;
    const { currentItems, setCurrentItems } = useCurrentPageStore();

    return useMutation({
      mutationFn: async ({
        cityId,
        hotelId,
      }: {
        cityId: number;
        hotelId: number;
      }) => {
        response = await apiClient.api.citiesHotelsDelete(cityId, hotelId);
        deletedHotelId = hotelId;
      },
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
      onError: () => {
        if (response && response.status === 204) {
          toast.success("Hotel deleted successfully");
          const data = response.data;
          response = undefined;
          setCurrentItems(
            currentItems.filter(
              (item) => (item as Hotel).id !== deletedHotelId,
            ),
          );
          return data;
        }
      },
    });
  };

  return {
    useAddHotel,
    useUpdateHotel,
    useDeleteHotel,
  };
};
