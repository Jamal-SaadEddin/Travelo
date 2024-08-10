import { Meta, StoryFn } from "@storybook/react";
import { HotelCardProps } from "./entities/HotelCardProps";
import HotelCard from "./HotelCard";

export default {
  title: "Components/Featured Deals/HotelCard",
  component: HotelCard,
} as Meta<typeof HotelCard>;

const Template: StoryFn<HotelCardProps> = (args) => <HotelCard {...args} />;

export const Default = Template.bind({});
Default.args = {
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
