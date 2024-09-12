import { City } from "@src/entities/common/City";
import { Hotel } from "@src/entities/common/Hotel";
import { Room } from "@src/entities/common/Room";
import { create } from "zustand";

// Function to load current page from local storage
const loadCurrentPage = (): string => {
  const pageData = localStorage.getItem("pageData");
  return pageData ? pageData : "cities";
};

interface CurrentPageStore {
  currentPage: string;
  setCurrentPage: (currentPage: string) => void;
  currentItems: (City | Hotel | Room)[];
  setCurrentItems: (currentItems: (City | Hotel | Room)[]) => void;
}

const useCurrentPageStore = create<CurrentPageStore>((set) => ({
  currentPage: loadCurrentPage(), // Load current page from local storage on init
  setCurrentPage: (currentPage) => {
    localStorage.setItem("pageData", currentPage); // Persist to local storage
    set(() => ({ currentPage }));
  },
  currentItems: [],
  setCurrentItems: (currentItems) => set(() => ({ currentItems })),
}));

export default useCurrentPageStore;
