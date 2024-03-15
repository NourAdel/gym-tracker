import { SetsContext } from "../_store/useSetsContext";
import type { Meta, StoryObj } from "@storybook/react";
import { SetList } from "../_components/SetList";
import { SETS, SETSWITHDIFFERENTDATE } from "../_constants/testsData";

const meta = {
  title: "Components/SetList",
  component: SetList,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <SetsContext.Provider
        value={{
          sets: SETS,
          slug: "",
          setSlug: () => {},
          addSet: () => {},
        }}
      >
        <Story />
      </SetsContext.Provider>
    ),
  ],
} satisfies Meta<typeof SetList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ListWithOneDate: Story = {
  args: {},
};

export const ListWithTwoDates: Story = {
  args: {},
};

ListWithTwoDates.decorators = [
  (Story) => (
    <SetsContext.Provider
      value={{
        sets: SETSWITHDIFFERENTDATE,
        slug: "",
        setSlug: () => {},
        addSet: () => {},
      }}
    >
      <Story />
    </SetsContext.Provider>
  ),
];
