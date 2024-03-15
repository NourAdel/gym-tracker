import ExerciseList from "../_components/ExerciseList";
import { EXERCISES } from "../_constants/testsData";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Page/ExerciseList",
  component: ExerciseList,
  parameters: {
    layout: "fullscreen",
  },
  args: {},
} satisfies Meta<typeof ExerciseList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const List: Story = {
  args: {
    list: EXERCISES,
  },
};

export const EmptyList: Story = {
  args: {
    list: [],
  },
};
