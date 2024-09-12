import { Meta, StoryFn } from "@storybook/react";
import NavbarLink from "./NavbarLink";

export default {
  title: "Components/Navbar/NavbarLink",
  component: NavbarLink,
  argTypes: {
    title: { control: "text" },
    href: { control: "text" },
  },
} as Meta;

const Template: StoryFn<{ title: string; href: string }> = (args) => (
  <NavbarLink {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "Home",
  href: "/",
};
