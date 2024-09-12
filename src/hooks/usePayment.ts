import { BookingRequest } from "@src/api/Api";
import { BookingResponse } from "@src/entities/BookingResponse";
import { createApiClient } from "@src/services/createApiClient";
import useCartStore from "@src/store/cartStore";
import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const usePayment = () => {
  const apiClient = createApiClient();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const setBookedRooms = useCartStore((s) => s.setBookedRooms);

  const useBooking = () =>
    useQuery<BookingResponse, Error>({
      queryKey: ["booking"],
      queryFn: async (): Promise<BookingResponse> => {
        const response = await apiClient.api.getBooking(1);
        return response.data as BookingResponse;
      },
      staleTime: 1000 * 60 * 5, // 5 minutes
      placeholderData: keepPreviousData,
    });

  const useAddBooking = () =>
    useMutation({
      mutationFn: (booking: BookingRequest) =>
        apiClient.api.bookingsCreate(booking),
      onSuccess: (savedBooking) => {
        queryClient
          .getQueryCache()
          .findAll({ queryKey: ["booking"] })
          .forEach((query) => {
            queryClient.setQueryData(query.queryKey, () => {
              return savedBooking.data;
            });
          });
        setBookedRooms([]);
        navigate("/confirmation");
      },
    });

  return {
    useBooking,
    useAddBooking,
  };
};
