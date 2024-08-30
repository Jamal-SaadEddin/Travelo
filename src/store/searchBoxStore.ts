import dayjs from "dayjs";
import { create } from "zustand";

type SearchQueries = {
  cityName: string;
  checkIn: dayjs.Dayjs;
  checkOut: dayjs.Dayjs;
  adults: number;
  children: number;
  rooms: number;
};

interface SearchBoxStore {
  searchQueries: SearchQueries;
  setSearchQueries: (searchQueries: SearchQueries) => void;
}

const useSearchBoxStore = create<SearchBoxStore>((set) => ({
  searchQueries: {
    cityName: "",
    checkIn: dayjs(),
    checkOut: dayjs().add(1, "day"),
    adults: 2,
    children: 0,
    rooms: 1,
  },
  setSearchQueries: (searchQueries) => set(() => ({ searchQueries })),
}));

export default useSearchBoxStore;

// import dayjs from "dayjs";
// import { create } from "zustand";

// interface SearchBoxStore {
//   cityName: string;
//   checkIn: dayjs.Dayjs;
//   checkOut: dayjs.Dayjs;
//   adults: number;
//   children: number;
//   rooms: number;
//   setCityName: (cityName: string) => void;
//   setCheckIn: (checkIn: dayjs.Dayjs) => void;
//   setCheckOut: (checkOut: dayjs.Dayjs) => void;
//   setAdults: (adults: number) => void;
//   setChildren: (children: number) => void;
//   setRooms: (rooms: number) => void;
// }

// const useSearchBoxStore = create<SearchBoxStore>((set) => ({
//   cityName: "",
//   checkIn: dayjs(),
//   checkOut: dayjs().add(1, "day"),
//   adults: 2,
//   children: 0,
//   rooms: 1,
//   setCityName: (cityName) => set(() => ({ cityName })),
//   setCheckIn: (checkIn) => set(() => ({ checkIn })),
//   setCheckOut: (checkOut) => set(() => ({ checkOut })),
//   setAdults: (adults) => set(() => ({ adults })),
//   setChildren: (children) => set(() => ({ children })),
//   setRooms: (rooms) => set(() => ({ rooms })),
// }));

// export default useSearchBoxStore;
