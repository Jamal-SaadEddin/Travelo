import { Meta, StoryFn } from "@storybook/react";
import StarRating from "./StarRating";

export default {
  title: "Components/Common/Star Rating",
  component: StarRating,
} as Meta<typeof StarRating>;

const Template: StoryFn<typeof StarRating> = (args) => <StarRating {...args} />;

export const ZeroStars = Template.bind({});
ZeroStars.args = {
  rating: 0,
};

export const ThreeStars = Template.bind({});
ThreeStars.args = {
  rating: 3,
};

export const FiveStars = Template.bind({});
FiveStars.args = {
  rating: 5,
};
