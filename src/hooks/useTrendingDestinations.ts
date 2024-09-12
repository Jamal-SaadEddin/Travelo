import { Destination } from "@src/entities/common/Destination";
import { createApiClient } from "@src/services/createApiClient";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

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
