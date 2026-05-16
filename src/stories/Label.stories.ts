import type { Meta, StoryObj } from "@storybook/react-vite";
import { Label } from "../components";
import type { LabelProps } from "../components/Label";

const meta: Meta<LabelProps> = {
  title: "UI/labels/Label",
  tags: ["autodocs"],
  component: Label,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: { control: "inline-radio" },
    fontColor: { control: "color" },
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
export const CustomBackgroundColor: Story = {
  args: {
    label: "Custom Color Label",
    backgroundColor: "#7d7d7d",
    fontColor: "#5517ac",
  },
};

export const CustomFontColor: Story = {
  args: {
    label: "Custom Color Label",
    fontColor: "#5517ac",
  },
};
