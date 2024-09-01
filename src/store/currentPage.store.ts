import { create } from "zustand";

interface CurrentPageStore {
  currentPage: string;
  setCurrentPage: (currentPage: string) => void;
}

const useCurrentPageStore = create<CurrentPageStore>((set) => ({
  currentPage: "cities",
  setCurrentPage: (currentPage) => set(() => ({ currentPage })),
}));

export default useCurrentPageStore;
