import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { Hotel } from "../pages/AdminPage/entities";
import ApiClient from "../services/apiClient";

const apiClient = ApiClient();

export const useHotels = (currentPage: number, cardsPerPage: number) => {
  return useQuery<{ data: Hotel[]; totalPages: number }, Error>({
    queryKey: ["hotels", currentPage, cardsPerPage],
    queryFn: async () => {
      const response = await apiClient.api.hotelsList({
        pageSize: cardsPerPage,
        pageNumber: currentPage,
      });
      const paginationHeader = response.headers.get("x-pagination");
      const pagination = JSON.parse(paginationHeader || "{}");
      const totalPages = pagination.TotalPageCount;

      return {
        data: response.data as Hotel[], // Return the actual data
        totalPages, // Include the pagination information
      };
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    placeholderData: keepPreviousData,
  });
};
