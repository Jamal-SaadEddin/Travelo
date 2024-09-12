import { create } from "zustand";
import { Hotel } from "../../common/HotelCard/entities/Hotel";

interface FilteredHotelsStore {
  filteredHotels: Hotel[];
  setFilteredHotels: (filteredHotels: Hotel[]) => void;
}

const useFilteredHotelsStore = create<FilteredHotelsStore>((set) => ({
  filteredHotels: [],
  setFilteredHotels: (filteredHotels) => set(() => ({ filteredHotels })),
}));

export default useFilteredHotelsStore;
