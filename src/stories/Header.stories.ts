import type { Meta, StoryObj } from "@storybook/react";
import Header from "../_components/shared/Header";

const meta = {
  title: "Components/Shared/AppHeader",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  args: {},
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AppHeader: Story = {
  args: {},
};
