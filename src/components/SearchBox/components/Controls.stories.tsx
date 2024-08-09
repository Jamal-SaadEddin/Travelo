import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import Controls from "./Controls";

export default {
  title: "Components/Controls",
  component: Controls,
} as Meta<typeof Controls>;

type ControlsProps = React.ComponentProps<typeof Controls>;

const Template: StoryFn<ControlsProps> = (args) => <Controls {...args} />;

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
