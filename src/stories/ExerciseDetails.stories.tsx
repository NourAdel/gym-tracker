import { SetsContext } from "../_store/useSetsContext";
import ExerciseDetails from "../_components/ExerciseDetails";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Page/ExerciseDetails",
  component: ExerciseDetails,
  args: {
    name: "Bench Press",
    image: "https://via.placeholder.com/150",
  },
  decorators: [
    (Story) => (
      <SetsContext.Provider
        value={{
          sets: [],
          slug: "",
          setSlug: () => {},
          addSet: () => {},
        }}
      >
        <Story />
      </SetsContext.Provider>
    ),
  ],
} satisfies Meta<typeof ExerciseDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Details: Story = {
  args: {
    name: "Bench Press",
    image: "https://via.placeholder.com/150",
  },
};
