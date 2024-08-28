export interface City {
  id: number;
  name: string;
  description: string;
}

export interface Hotel {
  id?: number;
  name: string;
  description: string;
  hotelType: number | null;
  starRating: number | null;
  latitude: number | null;
  longitude: number | null;
  cityId?: number | null;
}
