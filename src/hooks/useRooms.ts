import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { Room } from "../entities/Room";
import { createApiClient } from "../services/createApiClient";

export const useRooms = (selectedHotel: number | null, todayDate: string) => {
  const apiClient = createApiClient();

  return useQuery<Room[], Error>({
    queryKey: ["rooms", selectedHotel, todayDate],
    queryFn: async () => {
      const response = await apiClient.api.hotelsRoomsDetail(
        selectedHotel as number,
        {
          checkInDate: todayDate,
          checkOutDate: todayDate,
        },
      );
      return response.data as Room[];
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    placeholderData: keepPreviousData,
  });
};
