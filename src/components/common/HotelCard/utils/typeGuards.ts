import {
  FeaturedDealHotel,
  Hotel,
  RecentlyVisitedHotel,
} from "../entities/Hotel";

export function isFeaturedDealHotel(hotel: Hotel): hotel is FeaturedDealHotel {
  return (hotel as FeaturedDealHotel).originalRoomPrice !== undefined;
}

export function isRecentlyVisitedHotel(
  hotel: Hotel,
): hotel is RecentlyVisitedHotel {
  return (hotel as RecentlyVisitedHotel).visitDate !== undefined;
}
