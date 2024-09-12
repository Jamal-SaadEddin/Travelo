import { Hotel } from "@src/entities/common/Hotel";
import { createApiClient } from "@src/services/createApiClient";
import useAuthStore from "@src/store/auth.store";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const useRecentlyVisitedHotels = () => {
  const apiClient = createApiClient();
  const user = useAuthStore((state) => state.user);

  return useQuery<Hotel[], Error>({
    queryKey: ["recently-visited-hotels"],
    queryFn: async (): Promise<Hotel[]> => {
      const response = await apiClient.api.homeUsersRecentHotelsDetail(
        Number(user?.user_id),
      );
      return response.data as Hotel[];
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    placeholderData: keepPreviousData,
  });
};
