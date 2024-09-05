import { useMutation, useQueryClient } from "@tanstack/react-query";
import { City } from "../pages/AdminPage/entities";
import { createApiClient } from "../services/createApiClient";

const apiClient = createApiClient();

export const useCity = () => {
  const queryClient = useQueryClient();

  const useAddCity = () =>
    useMutation({
      mutationFn: (newCity: City) => apiClient.api.citiesCreate(newCity),
      onSuccess: (savedCity) => {
        queryClient
          .getQueryCache()
          .findAll({ queryKey: ["cities"] })
          .forEach((query) => {
            queryClient.setQueryData(query.queryKey, (oldCities: City[]) => {
              return [...oldCities, savedCity.data];
            });
          });
      },
    });

  const useUpdateCity = () =>
    useMutation({
      mutationFn: (updatedCity: City) =>
        apiClient.api.citiesUpdate(updatedCity.id!, {
          name: updatedCity.name,
          description: updatedCity.description,
        }),
      onSuccess: (_, updatedCity: City) => {
        queryClient
          .getQueryCache()
          .findAll({ queryKey: ["cities"] })
          .forEach((query) => {
            queryClient.setQueryData(query.queryKey, (oldCities: City[]) => {
              return oldCities.map((city) => {
                if (city.id === updatedCity.id) {
                  return updatedCity;
                }
                return city;
              });
            });
          });
      },
    });

  const useDeleteCity = () =>
    useMutation({
      mutationFn: (cityId: number) => apiClient.api.citiesDelete(cityId),
      onSuccess: (_, deletedCityId) => {
        queryClient
          .getQueryCache()
          .findAll({ queryKey: ["cities"] })
          .forEach((query) => {
            queryClient.setQueryData(query.queryKey, (oldCities: City[]) => {
              return oldCities.filter((city) => city.id !== deletedCityId);
            });
          });
      },
    });

  return {
    useAddCity,
    useUpdateCity,
    useDeleteCity,
  };
};
