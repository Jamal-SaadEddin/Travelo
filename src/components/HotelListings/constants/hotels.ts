import { Hotel } from "../../common/HotelCard/entities/Hotel";

export const hotels: Hotel[] = [
  {
    hotelId: 1,
    hotelName: "Plaza Hotel",
    starRating: 5,
    latitude: 12.32342342,
    longitude: 32.23245675,
    roomPrice: 100,
    roomType: "Double",
    cityName: "Ramallah",
    roomPhotoUrl:
      "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    discount: 0.2,
    amenities: [
      {
        id: 0,
        name: "wifi",
        description: "Very fast wifi in the room.",
      },
      {
        id: 0,
        name: "Room Service",
        description: "Very Fast room service available.",
      },
    ],
  },
  {
    hotelId: 2,
    hotelName: "Sunset Resort",
    starRating: 4,
    latitude: 34.123456,
    longitude: -118.321654,
    roomPrice: 150,
    roomType: "King Suite",
    cityName: "Los Angeles",
    roomPhotoUrl:
      "https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    discount: 0.15,
    amenities: [
      {
        id: 0,
        name: "Private Balcony",
        description: "Enjoy a private balcony with a view.",
      },
      {
        id: 0,
        name: "Mini Bar",
        description: "Complimentary mini bar in the room.",
      },
    ],
  },
  {
    hotelId: 3,
    hotelName: "Ocean View Inn",
    starRating: 3,
    latitude: 40.712776,
    longitude: -74.005974,
    roomPrice: 120,
    roomType: "Standard",
    cityName: "New York",
    roomPhotoUrl:
      "https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    discount: 0.1,
    amenities: [
      {
        id: 0,
        name: "City View",
        description: "Enjoy a stunning city view from your room.",
      },
      {
        id: 0,
        name: "Free Breakfast",
        description: "Complimentary breakfast included.",
      },
    ],
  },
  {
    hotelId: 4,
    hotelName: "Mountain Retreat",
    starRating: 4,
    latitude: 39.550051,
    longitude: -105.782067,
    roomPrice: 180,
    roomType: "Cabin",
    cityName: "Denver",
    roomPhotoUrl:
      "https://images.pexels.com/photos/97083/pexels-photo-97083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    discount: 0.25,
    amenities: [
      {
        id: 0,
        name: "Fireplace",
        description: "Cozy up with a fireplace in your cabin.",
      },
      {
        id: 0,
        name: "Hiking Trails",
        description: "Access to scenic hiking trails.",
      },
    ],
  },
  {
    hotelId: 5,
    hotelName: "Seaside Retreat",
    starRating: 4,
    latitude: 37.774929,
    longitude: -122.419416,
    roomPrice: 130,
    roomType: "Ocean View",
    cityName: "San Francisco",
    roomPhotoUrl:
      "https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    discount: 0.12,
    amenities: [
      {
        id: 0,
        name: "Ocean View Balcony",
        description: "Enjoy the sound of the waves from your balcony.",
      },
      {
        id: 0,
        name: "Spa Services",
        description: "Relax with in-room spa services.",
      },
    ],
  },
];
