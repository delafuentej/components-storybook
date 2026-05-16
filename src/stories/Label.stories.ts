import type { Meta, StoryObj } from "@storybook/react-vite";
import { Label } from "../components";

const meta = {
  /**
   * Text to Display
   */
  title: "Label",
  tags: ["autodocs"],
  component: Label,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: { control: "inline-radio" },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: "Basic Label",
    colorText: "text-primary",
  },
};

export const AllCaps: Story = {
  args: {
    label: "All Caps Label",
    allCaps: true,
    colorText: "text-tertiary",
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary Label",
    colorText: "text-secondary",
  },
};
export const CustomColor: Story = {
  args: {
    label: "Custom Color Label",
    backgroundColor: "#7d7d7d",
  },
};
