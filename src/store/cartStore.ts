import { create } from "zustand";
import { Room as BookedRoom } from "../entities";

interface CartStore {
  bookedRooms: BookedRoom[];
  setBookedRooms: (bookedRooms: BookedRoom[]) => void;
}

const useCartStore = create<CartStore>((set) => ({
  bookedRooms: [],
  setBookedRooms: (bookedRooms) => set(() => ({ bookedRooms })),
}));

export default useCartStore;
