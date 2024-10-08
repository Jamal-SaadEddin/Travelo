import { Meta, StoryFn } from "@storybook/react";
import { Links } from "../constants/Links";
import { NavbarLinkProps } from "./NavbarLink";
import NavbarList from "./NavbarList";

const { userLeftNavLinks: links } = Links();

export default {
  title: "Components/Navbar/NavbarList",
  component: NavbarList,
  argTypes: {
    links: { control: "object" },
    justifyContent: { control: "text" },
  },
} as Meta;

const Template: StoryFn<{
  links: NavbarLinkProps[];
  justifyContent: string;
}> = (args) => <NavbarList {...args} />;

export const Default = Template.bind({});
Default.args = {
  links,
  justifyContent: "flex-start",
};

export const Flex_Start_Nav = Template.bind({});
Flex_Start_Nav.args = {
  ...Default.args,
  justifyContent: "flex-start",
};

export const Flex_End_Nav = Template.bind({});
Flex_End_Nav.args = {
  ...Default.args,
  justifyContent: "flex-end",
};
