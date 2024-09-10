import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { Hotel } from "../pages/HotelPage/entities/Hotel";
import { createApiClient } from "../services/createApiClient";

const apiClient = createApiClient();

export const useHotelPage = (hotelId: number) =>
  useQuery<Hotel, Error>({
    queryKey: ["hotel", hotelId],
    queryFn: async (): Promise<Hotel> => {
      const response = await apiClient.api.getHotel(hotelId);
      return response.data as unknown as Hotel;
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    placeholderData: keepPreviousData,
  });
