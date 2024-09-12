import {
  FeaturedDealHotel,
  Hotel,
  ListingHotel,
  RecentlyVisitedHotel,
} from "@src/entities/common/Hotel";

export function isFeaturedDealHotel(hotel: Hotel): hotel is FeaturedDealHotel {
  return (hotel as FeaturedDealHotel).originalRoomPrice !== undefined;
}

export function isRecentlyVisitedHotel(
  hotel: Hotel,
): hotel is RecentlyVisitedHotel {
  return (hotel as RecentlyVisitedHotel).visitDate !== undefined;
}

export function isListingHotel(hotel: Hotel): hotel is ListingHotel {
  return (hotel as ListingHotel).amenities !== undefined;
}
