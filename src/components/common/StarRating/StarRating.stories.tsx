import { Meta, StoryFn } from "@storybook/react";
import StarRating from "./StarRating";
import { StarRatingProps } from "./entities/StarRatingProps";

export default {
  title: "Components/Featured Deals/StarRating",
  component: StarRating,
} as Meta<typeof StarRating>;

const Template: StoryFn<StarRatingProps> = (args) => <StarRating {...args} />;

export const ZeroStars = Template.bind({});
ZeroStars.args = {
  value: 0,
};

export const ThreeStars = Template.bind({});
ThreeStars.args = {
  value: 3,
};

export const FiveStars = Template.bind({});
FiveStars.args = {
  value: 5,
};
