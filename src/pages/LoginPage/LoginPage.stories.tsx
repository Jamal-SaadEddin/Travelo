import { Meta, StoryFn } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import CustomThemeProvider from "../../CustomThemeProvider";
import LoginPage, { LoginPageProps } from "./LoginPage";

export default {
  title: "Pages/LoginPage",
  component: LoginPage,
  decorators: [
    (Story) => (
      <CustomThemeProvider>
        <Story />
      </CustomThemeProvider>
    ),
  ],
} as Meta;

const Template: StoryFn<LoginPageProps> = (args) => <LoginPage {...args} />;

export const Default = Template.bind({});
Default.args = {
  initialValues: {
    username: "",
    password: "",
  },
};

export const WithPreFilledValues = Template.bind({});
WithPreFilledValues.args = {
  initialValues: {
    username: "johndoe",
    password: "password123",
  },
};

export const WithValidationErrors = Template.bind({});
WithValidationErrors.args = {
  initialValues: {
    username: "",
    password: "",
  },
};
WithValidationErrors.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Focus and blur the username field
  const usernameField = canvas.getByLabelText("Username");
  await userEvent.click(usernameField);
  await userEvent.tab();

  // Focus and blur the password field
  const passwordField = canvas.getByLabelText("Password");
  await userEvent.click(passwordField);
  await userEvent.tab();
};
