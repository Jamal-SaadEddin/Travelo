import { City } from "@src/entities/common/City";
import { createApiClient } from "@src/services/createApiClient";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const useCities = ({ cityName }: { cityName: string }) => {
  const apiClient = createApiClient();

  return useQuery<City[], Error>({
    queryKey: ["cities", cityName],
    queryFn: async (): Promise<City[]> => {
      const response = await apiClient.api.citiesList({ name: cityName });
      return response.data.map((city) => ({
        ...city,
        name: city.name ?? "",
        description: city.description ?? "",
      }));
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    placeholderData: keepPreviousData,
  });
};
