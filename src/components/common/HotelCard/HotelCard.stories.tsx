import { Meta, StoryFn } from "@storybook/react";
import { HotelCardProps } from "./entities/HotelCardProps";
import HotelCard from "./HotelCard";

export default {
  title: "Components/Common/Hotel Card",
  component: HotelCard,
} as Meta<typeof HotelCard>;

const Template: StoryFn<HotelCardProps> = (args) => <HotelCard {...args} />;

export const FeaturedDeal = Template.bind({});
FeaturedDeal.args = {
  hotel: {
    hotelId: 1,
    title: "Luxury South Suite",
    description:
      "Experience ultimate luxury in our South Suite at Plaza Hotel. This spacious suite offers breathtaking views of the city and is equipped with state-of-the-art amenities for an unforgettable stay.",
    cityName: "Ramallah",
    hotelName: "Plaza Hotel",
    hotelStarRating: 4,
    roomPhotoUrl:
      "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    originalRoomPrice: 200,
    discount: 0.5,
    finalPrice: 100,
  },
};

export const RecentlyVisited = Template.bind({});
RecentlyVisited.args = {
  hotel: {
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
};
