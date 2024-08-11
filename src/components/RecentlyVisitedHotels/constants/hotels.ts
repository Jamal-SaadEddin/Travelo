import { Hotel } from "../entities/Hotel";

export const hotels: Hotel[] = [
  {
    hotelId: 1,
    hotelName: "Plaza Hotel",
    starRating: 5,
    visitDate: "2022-11-24T00:00:00",
    cityName: "Ramallah",
    thumbnailUrl:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/98271882.jpg?k=cc5964ba081d4c585e3daa9d1c532a8c002c563637238f9bc94896c5daa98496&o=&hp=1",
    priceLowerBound: 100,
    priceUpperBound: 1000,
  },
  {
    hotelId: 2,
    hotelName: "Sunset Resort",
    starRating: 4,
    visitDate: "2022-10-15T00:00:00",
    cityName: "Los Angeles",
    thumbnailUrl:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/2a/c2/96/sunset-resort.jpg?w=700&h=-1&s=1",
    priceLowerBound: 300,
    priceUpperBound: 2000,
  },
  {
    hotelId: 3,
    hotelName: "Ocean View Inn",
    starRating: 3,
    visitDate: "2022-09-05T00:00:00",
    cityName: "New York",
    thumbnailUrl:
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=600",
    priceLowerBound: 500,
    priceUpperBound: 2500,
  },
  {
    hotelId: 4,
    hotelName: "Mountain Retreat",
    starRating: 4,
    visitDate: "2022-08-20T00:00:00",
    cityName: "Denver",
    thumbnailUrl:
      "https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    priceLowerBound: 700,
    priceUpperBound: 2200,
  },
  {
    hotelId: 5,
    hotelName: "Seaside Retreat",
    starRating: 4,
    visitDate: "2022-07-10T00:00:00",
    cityName: "San Francisco",
    thumbnailUrl:
      "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    priceLowerBound: 1000,
    priceUpperBound: 2000,
  },
];
