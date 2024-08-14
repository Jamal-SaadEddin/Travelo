import { create } from "zustand";
import { ListingHotel } from "../../common/HotelCard/entities/Hotel";
import { hotels } from "../../HotelListings/constants/hotels";

interface FilteredHotelsStore {
  filteredHotels: ListingHotel[];
  setFilteredHotels: (filteredHotels: ListingHotel[]) => void;
}

const useFilteredHotelsStore = create<FilteredHotelsStore>((set) => ({
  filteredHotels: hotels as ListingHotel[],
  setFilteredHotels: (filteredHotels) => set(() => ({ filteredHotels })),
}));

export default useFilteredHotelsStore;
