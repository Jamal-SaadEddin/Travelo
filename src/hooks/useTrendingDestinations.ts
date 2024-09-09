import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { Destination } from "../components/TrendingDestinations/entities/Destination";
import { createApiClient } from "../services/createApiClient";

const apiClient = createApiClient();

export const useTrendingDestinations = () =>
  useQuery<Destination[], Error>({
    queryKey: ["trending-destinations"],
    queryFn: async (): Promise<Destination[]> => {
      const response = await apiClient.api.homeDestinationsTrendingList();
      return response.data as Destination[];
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    placeholderData: keepPreviousData,
  });
