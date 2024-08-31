import { Room } from "../../../entities/Room";

export const availableRooms: Room[] = [
  {
    roomId: 1,
    roomNumber: 101,
    roomPhotoUrl:
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/33143786.jpg?k=4d0bca9d9795b80beb2cd9786946e043b23d1372eb633d5855d3aba6343d68d4&o=&hp=1",
    roomType: "Standard",
    capacityOfAdults: 2,
    capacityOfChildren: 1,
    roomAmenities: [
      {
        name: "Free Wi-Fi",
        description: "High-speed internet available in all rooms.",
      },
      {
        name: "TV",
        description: "Flat-screen TV with cable channels.",
      },
      {
        name: "Air Conditioning",
        description: "Individually controlled air conditioning.",
      },
    ],
    price: 150,
    availability: true,
  },
  {
    roomId: 3,
    roomNumber: 301,
    roomPhotoUrl:
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/31823343.jpg?k=cbd94934282436e4989a72c9bdf725fa45d668902fe7ebc745d8986b73452e18&o=&hp=1",
    roomType: "Deluxe",
    capacityOfAdults: 2,
    capacityOfChildren: 2,
    roomAmenities: [
      {
        name: "King Size Bed",
        description: "Spacious king-size bed for a comfortable stay.",
      },
      {
        name: "City View",
        description: "Enjoy a panoramic view of the city.",
      },
      {
        name: "Room Service",
        description: "24/7 room service available.",
      },
    ],
    price: 180,
    availability: true,
  },
  {
    roomId: 6,
    roomNumber: 601,
    roomPhotoUrl:
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/33142495.jpg?k=9956c92b062724ceb086158d062ca22b4d10a5737fd2fc08879f44d2842d5091&o=&hp=1",
    roomType: "Executive Suite",
    capacityOfAdults: 2,
    capacityOfChildren: 1,
    roomAmenities: [
      {
        name: "Business Center Access",
        description: "Exclusive access to the hotel's business center.",
      },
      {
        name: "Meeting Room",
        description: "Private meeting room for business needs.",
      },
      {
        name: "Complimentary Breakfast",
        description: "Daily complimentary breakfast included.",
      },
    ],
    price: 220,
    availability: true,
  },
];
