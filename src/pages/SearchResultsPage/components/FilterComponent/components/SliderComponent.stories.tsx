import { Meta, StoryFn } from "@storybook/react";
import SliderComponent from "./SliderComponent";

export default {
  title: "Components/FilterComponent/SliderComponent",
  component: SliderComponent,
} as Meta<typeof SliderComponent>;

const Template: StoryFn<typeof SliderComponent> = (args) => (
  <SliderComponent {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "Default Slider",
  value: [50, 90],
  steps: 10,
  minValue: 0,
  maxValue: 100,
  valueLabelFormat: (value: number) => `${value}%`,
  ariaLabelledBy: "default-slider",
  handleValueChange: (_event: Event, newValue: number | number[]) => {
    console.log("Slider value changed:", newValue);
  },
};

export const PriceRange = Template.bind({});
PriceRange.args = {
  title: "Price Range",
  value: [100, 180],
  steps: 10,
  minValue: 100,
  maxValue: 180,
  valueLabelFormat: (value: number) => `$${value}`,
  ariaLabelledBy: "price-slider",
  handleValueChange: (_event: Event, newValue: number | number[]) => {
    console.log("Price slider value changed:", newValue);
  },
};

export const StarRating = Template.bind({});
StarRating.args = {
  title: "Star Rating",
  value: [1, 5],
  steps: 1,
  minValue: 1,
  maxValue: 5,
  valueLabelFormat: (value: number) => `${value} Star${value > 1 ? "s" : ""}`,
  ariaLabelledBy: "star-rating-slider",
  handleValueChange: (_event: Event, newValue: number | number[]) => {
    console.log("Star rating slider value changed:", newValue);
  },
};
