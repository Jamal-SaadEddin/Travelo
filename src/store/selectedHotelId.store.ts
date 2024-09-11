import { create } from "zustand";

interface SelectedHotelIdStore {
  selectedHotelId: number;
  setSelectedHotelId: (selectedHotelId: number) => void;
}

const useSelectedHotelIdStore = create<SelectedHotelIdStore>((set) => ({
  selectedHotelId: 0,
  setSelectedHotelId: (selectedHotelId) => set(() => ({ selectedHotelId })),
}));

export default useSelectedHotelIdStore;
