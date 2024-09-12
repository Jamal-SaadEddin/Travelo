import { Hotel } from "@src/entities/common/Hotel";
import { createApiClient } from "@src/services/createApiClient";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const useFeaturedDeals = () => {
  const apiClient = createApiClient();

  return useQuery<Hotel[], Error>({
    queryKey: ["featured-deals"],
    queryFn: async (): Promise<Hotel[]> => {
      const response = await apiClient.api.homeFeaturedDealsList();
      return response.data as Hotel[];
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    placeholderData: keepPreviousData,
  });
};
