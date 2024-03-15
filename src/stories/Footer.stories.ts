import type { Meta, StoryObj } from "@storybook/react";
import Footer from "../_components/shared/Footer";

const meta = {
  title: "Components/Shared/AppFooter",
  component: Footer,
  parameters: {
    layout: "fullscreen",
  },
  args: {},
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AppFooter: Story = {
  args: {},
};
