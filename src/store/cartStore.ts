import { create } from "zustand";
import { Room as BookedRoom } from "../entities/Room";

interface CartStore {
  bookedRooms: BookedRoom[];
  setBookedRooms: (bookedRooms: BookedRoom[]) => void;
}

const useCartStore = create<CartStore>((set) => ({
  bookedRooms: [],
  setBookedRooms: (bookedRooms) => set(() => ({ bookedRooms })),
}));

export default useCartStore;
