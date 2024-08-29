import { create } from "zustand";
import { AvailableRoom as BookedRoom } from "../components/AvailableRooms/enitties/AvailableRoom";

interface CartStore {
  bookedRooms: BookedRoom[];
  setBookedRooms: (bookedRooms: BookedRoom[]) => void;
}

const useCartStore = create<CartStore>((set) => ({
  bookedRooms: [],
  setBookedRooms: (bookedRooms) => set(() => ({ bookedRooms })),
}));

export default useCartStore;
