import { Meta, StoryFn } from "@storybook/react";
import NavbarMenu from "../components/NavbarMenu";
import { leftNavLinks, rightNavLinks } from "../constants/links";
import NavLink from "../entities/NavLink";

export default {
  title: "Navbar/NavbarMenu",
  component: NavbarMenu,
  argTypes: {
    leftNavLinks: { control: "object" },
    rightNavLinks: { control: "object" },
  },
} as Meta;

const Template: StoryFn<{
  leftNavLinks: NavLink[];
  rightNavLinks: NavLink[];
}> = (args) => <NavbarMenu {...args} />;

export const Default = Template.bind({});
Default.args = {
  leftNavLinks,
  rightNavLinks,
};
