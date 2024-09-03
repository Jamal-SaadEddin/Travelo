import { useQuery } from "@tanstack/react-query";
import { Room } from "../entities/Room";
import ApiClient from "../services/apiClient";

const apiClient = ApiClient();

export const useRooms = (selectedHotel: number | null, todayDate: string) => {
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
  });
};
