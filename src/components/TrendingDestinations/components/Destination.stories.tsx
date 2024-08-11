import { Meta, StoryFn } from "@storybook/react";
import { DestinationProps } from "../entities/DestinationProps";
import Destination from "./Destination";

export default {
  title: "Components/Destination",
  component: Destination,
} as Meta<typeof Destination>;

const Template: StoryFn<DestinationProps> = (args) => <Destination {...args} />;

export const Default = Template.bind({});
Default.args = {
  destination: {
    cityId: 3,
    cityName: "New York",
    countryName: "United States",
    description:
      "Experience the iconic cityscape of New York, where skyscrapers touch the clouds and diverse cultures converge. Visit famous landmarks, explore Central Park, and indulge in world-class dining.",
    thumbnailUrl:
      "https://worldstrides.com/wp-content/uploads/2015/07/iStock_000040849990_Large.jpg",
  },
};

export const NoImage = Template.bind({});
NoImage.args = {
  destination: {
    cityId: 3,
    cityName: "Tokyo",
    countryName: "Japan",
    thumbnailUrl: "",
    description:
      "The bustling capital of Japan, known for its modern skyscrapers, shopping, and food.",
  },
};
