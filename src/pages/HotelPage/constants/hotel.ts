import { Hotel } from "../entities/Hotel";

export const hotel: Hotel = {
  hotelName: "Plaza Hotel",
  location: "Ramallah, Palestine",
  description:
    "Experience luxury and comfort at Plaza Hotel, located in the heart of Ramallah. Our hotel offers a perfect blend of modern amenities and traditional hospitality.",
  latitude: 31.916989,
  longitude: 35.206938,
  amenities: [
    {
      name: "Free Wi-Fi",
      description: "High-speed internet available in all rooms.",
    },
    {
      name: "Fitness Center",
      description: "Stay fit with our well-equipped fitness center.",
    },
    {
      name: "Swimming Pool",
      description: "Relax by the poolside and enjoy a refreshing swim.",
    },
  ],
  starRating: 5,
  availableRooms: 50,
  imageUrl:
    "https://cf.bstatic.com/xdata/images/hotel/max1280x900/98271882.jpg?k=cc5964ba081d4c585e3daa9d1c532a8c002c563637238f9bc94896c5daa98496&o=&hp=1",
  cityId: 1,
};

hotel.amenities.map((amenity) => ({ ...amenity, icon: "😍" }));
