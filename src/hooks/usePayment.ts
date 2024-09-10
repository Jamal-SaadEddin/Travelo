import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { BookingRequest } from "../api/Api";
import { BookingResponse } from "../pages/ConfirmationPage/entities";
import { createApiClient } from "../services/createApiClient";

const apiClient = createApiClient();

export const usePayment = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

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
        navigate("/confirmation");
      },
    });

  return {
    useBooking,
    useAddBooking,
  };
};
