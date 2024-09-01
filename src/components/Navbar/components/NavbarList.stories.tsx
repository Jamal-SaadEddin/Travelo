import { Meta, StoryFn } from "@storybook/react";
import NavbarList from "../components/NavbarList";
import { userLeftNavLinks as links } from "../constants/links";
import NavbarLinkProps from "../entities/NavbarLinkProps";

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
