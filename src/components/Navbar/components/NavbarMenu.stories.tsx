import { Meta, StoryFn } from "@storybook/react";
import NavbarMenu from "../components/NavbarMenu";
import { userLeftNavLinks, userRightNavLinks } from "../constants/links";
import NavbarLinkProps from "../entities/NavbarLinkProps";

export default {
  title: "Components/Navbar/NavbarMenu",
  component: NavbarMenu,
  argTypes: {
    leftNavLinks: { control: "object" },
    rightNavLinks: { control: "object" },
  },
} as Meta;

const Template: StoryFn<{
  leftNavLinks: NavbarLinkProps[];
  rightNavLinks: NavbarLinkProps[];
}> = (args) => <NavbarMenu {...args} />;

export const Default = Template.bind({});
Default.args = {
  leftNavLinks: userLeftNavLinks,
  rightNavLinks: userRightNavLinks,
};
