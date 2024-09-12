import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { RoomInfo } from "../entities/RoomInfo";
import RoomBookingSelector from "./RoomBookingSelector";

export default {
  title: "Components/Search Box/RoomBookingSelector",
  component: RoomBookingSelector,
} as Meta<typeof RoomBookingSelector>;

type RoomBookingSelectorProps = React.ComponentProps<
  typeof RoomBookingSelector
>;

const Template: StoryFn<RoomBookingSelectorProps> = (args) => (
  <RoomBookingSelector {...args} />
);

export const Default = Template.bind({});
Default.args = {
  roomInfo: {
    adults: 2,
    children: 1,
    rooms: 1,
  } as RoomInfo,
  handleChange: (name: string, count: number) => {
    console.log(`Changed ${name}: ${count}`);
  },
};

export const AllDisabled = Template.bind({});
AllDisabled.args = {
  roomInfo: {
    adults: 1,
    children: 0,
    rooms: 1,
  } as RoomInfo,
  handleChange: (name: string, count: number) => {
    console.log(`Changed ${name}: ${count}`);
  },
};

export const MultipleRooms = Template.bind({});
MultipleRooms.args = {
  roomInfo: {
    adults: 3,
    children: 2,
    rooms: 2,
  } as RoomInfo,
  handleChange: (name: string, count: number) => {
    console.log(`Changed ${name}: ${count}`);
  },
};
