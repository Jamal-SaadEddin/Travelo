import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { Hotel } from "../components/common/HotelCard/entities/Hotel";
import { createApiClient } from "../services/createApiClient";

const apiClient = createApiClient();

export const useFeaturedDeals = () =>
  useQuery<Hotel[], Error>({
    queryKey: ["featured-deals"],
    queryFn: async (): Promise<Hotel[]> => {
      const response = await apiClient.api.homeFeaturedDealsList();
      return response.data as Hotel[];
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    placeholderData: keepPreviousData,
  });
