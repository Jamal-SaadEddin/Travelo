import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { Destination } from "../components/TrendingDestinations/entities/Destination";
import { createApiClient } from "../services/createApiClient";

export const useTrendingDestinations = () => {
  const apiClient = createApiClient();

  return useQuery<Destination[], Error>({
    queryKey: ["trending-destinations"],
    queryFn: async (): Promise<Destination[]> => {
      const response = await apiClient.api.homeDestinationsTrendingList();
      return response.data as Destination[];
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    placeholderData: keepPreviousData,
  });
};
