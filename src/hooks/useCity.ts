import { City } from "@src/entities/common/City";
import { createApiClient } from "@src/services/createApiClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useCity = () => {
  const apiClient = createApiClient();
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
        toast.success("City added successfully");
      },
      onError: () => {
        toast.error("City creation failed");
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
        toast.success("City updated successfully");
      },
      onError: () => {
        toast.error("City update failed");
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
        toast.success("City deleted successfully");
      },
      onError: () => {
        toast.error("City deletion failed");
      },
    });

  return {
    useAddCity,
    useUpdateCity,
    useDeleteCity,
  };
};
