import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { GalleryPhoto } from "../components/HotelGallery/entities/GalleryPhoto";
import { Review } from "../components/ReviewsSlider/entities/Review";
import { Room } from "../entities/Room";
import { Hotel } from "../pages/HotelPage/entities/Hotel";
import { createApiClient } from "../services/createApiClient";
import useSearchBoxStore from "../store/searchBoxStore";

export const useHotelPage = (hotelId: number) => {
  const apiClient = createApiClient();
  const searchQueries = useSearchBoxStore((state) => state.searchQueries);

  const useHotelData = () =>
    useQuery<Hotel, Error>({
      queryKey: ["hotel-data", hotelId],
      queryFn: async (): Promise<Hotel> => {
        const response = await apiClient.api.getHotel(hotelId);
        return response.data as unknown as Hotel;
      },
      staleTime: 1000 * 60 * 5, // 5 minutes
      placeholderData: keepPreviousData,
    });

  const useHotelGallery = () =>
    useQuery<GalleryPhoto[], Error>({
      queryKey: ["hotel-gallery", hotelId],
      queryFn: async (): Promise<GalleryPhoto[]> => {
        const response = await apiClient.api.hotelsGalleryDetail(hotelId);
        return response.data as GalleryPhoto[];
      },
      staleTime: 1000 * 60 * 5, // 5 minutes
      placeholderData: keepPreviousData,
    });

  const useHotelReviews = () =>
    useQuery<Review[], Error>({
      queryKey: ["hotel-reviews", hotelId],
      queryFn: async (): Promise<Review[]> => {
        const response = await apiClient.api.hotelsReviewsDetail(hotelId);
        return response.data as Review[];
      },
      staleTime: 1000 * 60 * 5, // 5 minutes
      placeholderData: keepPreviousData,
    });

  const useHotelAvailableRooms = () =>
    useQuery<Room[], Error>({
      queryKey: ["hotel-rooms", hotelId],
      queryFn: async (): Promise<Room[]> => {
        const response = await apiClient.api.hotelsAvailableRoomsDetail(
          hotelId,
          {
            checkInDate: searchQueries.checkIn.format("YYYY-MM-DD"),
            checkOutDate: searchQueries.checkOut.format("YYYY-MM-DD"),
          },
        );
        return response.data as Room[];
      },
      staleTime: 1000 * 60 * 5, // 5 minutes
      placeholderData: keepPreviousData,
    });

  return {
    useHotelData,
    useHotelGallery,
    useHotelReviews,
    useHotelAvailableRooms,
  };
};
