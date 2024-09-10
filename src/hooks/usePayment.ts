import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { BookingRequest } from "../api/Api";
import { createApiClient } from "../services/createApiClient";

const apiClient = createApiClient();

export const usePayment = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

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
    useAddBooking,
  };
};
