import { create } from "zustand";

// Function to load current page from local storage
const loadCurrentPage = (): string => {
  const pageData = localStorage.getItem("pageData");
  return pageData ? pageData : "cities";
};

interface CurrentPageStore {
  currentPage: string;
  setCurrentPage: (currentPage: string) => void;
}

const useCurrentPageStore = create<CurrentPageStore>((set) => ({
  currentPage: loadCurrentPage(), // Load current page from local storage on init
  setCurrentPage: (currentPage) => {
    localStorage.setItem("pageData", currentPage); // Persist to local storage
    set(() => ({ currentPage }));
  },
}));

export default useCurrentPageStore;
