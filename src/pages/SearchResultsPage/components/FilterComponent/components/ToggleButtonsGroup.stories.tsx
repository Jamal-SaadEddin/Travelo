import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import PoolIcon from "@mui/icons-material/Pool";
import WifiIcon from "@mui/icons-material/Wifi";
import { Meta, StoryFn } from "@storybook/react";
import ToggleButtonsGroup from "./ToggleButtonsGroup";

export default {
  title: "Components/FilterComponent/ToggleButtonsGroup",
  component: ToggleButtonsGroup,
} as Meta<typeof ToggleButtonsGroup>;

const Template: StoryFn<typeof ToggleButtonsGroup> = (args) => (
  <ToggleButtonsGroup {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "Default Amenities",
  buttons: [
    { name: "Wi-Fi", icon: <WifiIcon /> },
    { name: "Pool", icon: <PoolIcon /> },
    { name: "Bar", icon: <LocalBarIcon /> },
    { name: "Gym", icon: <FitnessCenterIcon /> },
  ],
  selectedButtons: ["Wi-Fi"],
};

export const RoomTypes = Template.bind({});
RoomTypes.args = {
  title: "Room Types",
  buttons: [
    { name: "Single Room" },
    { name: "Double Room" },
    { name: "Suite" },
    { name: "Family Room" },
  ],
  selectedButtons: ["Double Room"],
};

export const AmenitiesWithIcons = Template.bind({});
AmenitiesWithIcons.args = {
  title: "Amenities",
  buttons: [
    { name: "Wi-Fi", icon: <WifiIcon /> },
    { name: "Pool", icon: <PoolIcon /> },
    { name: "Bar", icon: <LocalBarIcon /> },
    { name: "Gym", icon: <FitnessCenterIcon /> },
  ],
  selectedButtons: ["Pool"],
};
