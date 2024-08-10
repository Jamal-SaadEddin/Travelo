import { Hotel } from "../../common/HotelCard/entities/Hotel";

export const hotels: Hotel[] = [
  {
    hotelId: 1,
    originalRoomPrice: 200,
    discount: 0.5,
    finalPrice: 100,
    cityName: "Ramallah",
    hotelName: "Plaza Hotel",
    hotelStarRating: 5,
    title: "Luxury South Suite",
    description:
      "Experience ultimate luxury in our South Suite at Plaza Hotel. This spacious suite offers breathtaking views of the city and is equipped with state-of-the-art amenities for an unforgettable stay.",
    roomPhotoUrl:
      "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    hotelId: 2,
    originalRoomPrice: 150,
    discount: 0.4,
    finalPrice: 90,
    cityName: "Los Angeles",
    hotelName: "Sunset Resort",
    hotelStarRating: 4,
    title: "Ocean View Retreat",
    description:
      "Escape to the serenity of Sunset Resort's Ocean View Retreat. Enjoy the calming sounds of the waves and stunning views of the ocean from your cozy room. Perfect for a relaxing getaway.",
    roomPhotoUrl:
      "https://images.pexels.com/photos/172872/pexels-photo-172872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    hotelId: 4,
    originalRoomPrice: 180,
    discount: 0.45,
    finalPrice: 99,
    cityName: "Denver",
    hotelName: "Mountain Retreat",
    hotelStarRating: 4,
    title: "Mountain View Cabin",
    description:
      "Unplug and unwind in our Mountain View Cabin at Mountain Retreat. Surrounded by nature, this cozy cabin offers a peaceful retreat with access to scenic hiking trails.",
    roomPhotoUrl:
      "https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    hotelId: 5,
    originalRoomPrice: 130,
    discount: 0.35,
    finalPrice: 85,
    cityName: "San Francisco",
    hotelName: "Seaside Retreat",
    hotelStarRating: 4,
    title: "Seaside Retreat",
    description:
      "Embrace the coastal charm at Seaside Retreat. Our Seaside Escape package offers a comfortable stay with ocean views and convenient access to the city's attractions.",
    roomPhotoUrl:
      "https://images.pexels.com/photos/2873951/pexels-photo-2873951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];
