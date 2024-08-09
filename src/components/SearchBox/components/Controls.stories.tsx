import { Meta, StoryFn } from "@storybook/react";
import Controls from "./Controls";

export default {
  title: "SearchBox/Controls",
  component: Controls,
  argTypes: {
    title: { control: "text" },
    count: { control: "number" },
    disabled: { control: "boolean" },
    handleChange: { action: "handleChange" },
  },
} as Meta<typeof Controls>;

const Template: StoryFn<{
  title: string;
  count: number;
  disabled: boolean;
  handleChange: (name: string, count: number) => void;
}> = (args) => <Controls {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Adults",
  count: 1,
  disabled: false,
  handleChange: (name: string, count: number) =>
    alert(`Changed ${name}: ${count}`),
};

export const Disabled = Template.bind({});
Disabled.args = {
  title: "Children",
  count: 0,
  disabled: true,
  handleChange: (name: string, count: number) =>
    alert(`Changed ${name}: ${count}`),
};

export const MultipleControls = () => (
  <>
    <Controls
      title="Adults"
      count={2}
      handleChange={(name: string, count: number) =>
        alert(`Changed ${name}: ${count}`)
      }
    />
    <Controls
      title="Children"
      count={1}
      handleChange={(name: string, count: number) =>
        alert(`Changed ${name}: ${count}`)
      }
      disabled={false}
    />
  </>
);
