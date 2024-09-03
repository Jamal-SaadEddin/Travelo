import { useQuery } from "@tanstack/react-query";
import { City } from "../pages/AdminPage/entities";
import ApiClient from "../services/apiClient";

const apiClient = ApiClient();

export const useCities = () =>
  useQuery<City[], Error>({
    queryKey: ["cities"],
    queryFn: async (): Promise<City[]> => {
      const response = await apiClient.api.citiesList();
      return response.data.map((city) => ({
        ...city,
        name: city.name ?? "",
        description: city.description ?? "",
      }));
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
