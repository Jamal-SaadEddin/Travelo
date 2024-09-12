import { ListingHotel } from "@src/entities/common/Hotel";

interface Filters {
  price: number[];
  rating: number[];
  selectedAmenities: string[];
  selectedRoomType: string[];
}

export const filterHotels = (
  hotels: ListingHotel[],
  filters: Filters,
): ListingHotel[] => {
  return hotels.filter((hotel: ListingHotel) => {
    const matchesPrice =
      hotel.roomPrice >= filters.price[0] &&
      hotel.roomPrice <= filters.price[1];
    const matchesRating =
      hotel.starRating >= filters.rating[0] &&
      hotel.starRating <= filters.rating[1];
    const matchesRoomType =
      filters.selectedRoomType.length === 0 ||
      filters.selectedRoomType.includes(hotel.roomType);

    const matchesAmenities =
      filters.selectedAmenities.length === 0 ||
      filters.selectedAmenities.every((amenity) =>
        hotel.amenities.some((hotelAmenity) => hotelAmenity.name === amenity),
      );

    return matchesPrice && matchesRating && matchesRoomType && matchesAmenities;
  });
};
