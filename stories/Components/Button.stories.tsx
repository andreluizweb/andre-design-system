import React from "react";
import { Meta, Story } from "@storybook/react";

import { Button } from "../../src";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

export const Default: Story = ({ ...args }) => {
  return <Button {...args}>Button</Button>;
};
