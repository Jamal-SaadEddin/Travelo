import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { ListingHotel } from "../components/common/HotelCard/entities/Hotel";
import { createApiClient } from "../services/createApiClient";

export const useSearchHotels = (query?: {
  checkInDate?: string;
  checkOutDate?: string;
  city?: string;
  starRate?: number;
  sort?: string;
  numberOfRooms?: number;
  adults?: number;
  children?: number;
}) => {
  const apiClient = createApiClient();

  return useQuery<ListingHotel[], Error>({
    queryKey: ["searchHotels", query],
    queryFn: async (): Promise<ListingHotel[]> => {
      const response = await apiClient.api.homeSearchList(query);
      return response.data as ListingHotel[];
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    placeholderData: keepPreviousData,
  });
};
