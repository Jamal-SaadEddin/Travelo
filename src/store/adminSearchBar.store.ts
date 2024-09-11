import { create } from "zustand";

interface AdminSearchBarStore {
  cityName: string;
  hotelName: string;
  setCityName: (cityName: string) => void;
  setHotelName: (hotelName: string) => void;
}

const useAdminSearchBarStore = create<AdminSearchBarStore>((set) => ({
  cityName: "",
  hotelName: "",
  setCityName: (cityName) => set(() => ({ cityName })),
  setHotelName: (hotelName) => set(() => ({ hotelName })),
}));

export default useAdminSearchBarStore;
