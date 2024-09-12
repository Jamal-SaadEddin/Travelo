import { Hotel } from "@src/entities/common/Hotel";
import { create } from "zustand";

interface FilteredHotelsStore {
  filteredHotels: Hotel[];
  setFilteredHotels: (filteredHotels: Hotel[]) => void;
}

const useFilteredHotelsStore = create<FilteredHotelsStore>((set) => ({
  filteredHotels: [],
  setFilteredHotels: (filteredHotels) => set(() => ({ filteredHotels })),
}));

export default useFilteredHotelsStore;
