import { Room as BookedRoom } from "@src/entities/common/Room";
import { create } from "zustand";

// Function to load booked rooms from local storage
const loadBookedRooms = (): BookedRoom[] => {
  const storedRooms = localStorage.getItem("bookedRooms");
  return storedRooms ? JSON.parse(storedRooms) : [];
};

interface CartStore {
  bookedRooms: BookedRoom[];
  setBookedRooms: (bookedRooms: BookedRoom[]) => void;
}

const useCartStore = create<CartStore>((set) => ({
  bookedRooms: loadBookedRooms(), // Load booked rooms from local storage on init
  setBookedRooms: (bookedRooms: BookedRoom[]) => {
    localStorage.setItem("bookedRooms", JSON.stringify(bookedRooms)); // Persist to local storage
    set(() => ({ bookedRooms }));
  },
}));

export default useCartStore;
