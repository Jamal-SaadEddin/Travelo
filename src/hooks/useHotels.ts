import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { Hotel } from "../pages/AdminPage/entities";
import { createApiClient } from "../services/createApiClient";

export const useHotels = ({
  hotelName,
  currentPage,
  cardsPerPage,
}: {
  hotelName: string;
  currentPage: number;
  cardsPerPage: number;
}) => {
  const apiClient = createApiClient();

  return useQuery<{ data: Hotel[]; totalPages: number }, Error>({
    queryKey: ["hotels", hotelName, currentPage, cardsPerPage],
    queryFn: async () => {
      const response = await apiClient.api.hotelsList({
        name: hotelName,
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
