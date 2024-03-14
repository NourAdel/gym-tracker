import ExerciseDetails from ".";
import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { SetsContext, SetsContextProvider } from "@/_store/useSetsContext";
import { ExerciseDetailsProps, Set } from "@/_types";

const exercise: ExerciseDetailsProps = {
  name: "Push ups",
  image: 'image: "https://example.com/images/1.jpg"',
};
const onAddSet = jest.fn();

const WrappedExerciseDetails = () => {
  return (
    <SetsContext.Provider
      value={{
        sets: [
          {
            date: new Date("2024-03-14T00:00:00.000Z"),
            sets: [
              {
                date: new Date("2024-03-14T00:00:00.000Z"),
                reps: 10,
                weight: 100,
                rm: 100 * (36 / (37 - 10)),
              },
            ],
          },
        ],
        slug: "",
        setSlug: () => {},
        addSet: () => {},
      }}
    >
      <ExerciseDetails {...exercise} />
    </SetsContext.Provider>
  );
};
describe("ExerciseDetails", () => {
  it("renders exercise name and image correctly", () => {
    const { getByText, getByAltText } = render(<WrappedExerciseDetails />);
    expect(getByText("Push ups")).toBeInTheDocument();
    expect(getByAltText("Push ups")).toBeInTheDocument();
    expect(getByAltText("Push ups")).toHaveAttribute("src");
    expect(getByAltText("Push ups")).toHaveAttribute("width", "150");
    expect(getByAltText("Push ups")).toHaveAttribute("height", "150");
  });

  it("renders set list correctly", () => {
    const { getByTestId, getByText } = render(<WrappedExerciseDetails />);
    expect(getByText("Performance:")).toBeInTheDocument();
    expect(getByTestId("set-list")).toBeInTheDocument();
  });

  it("renders reps and weight inputs correctly", () => {
    const { getByTestId } = render(<WrappedExerciseDetails />);
    expect(getByTestId("reps-input")).toBeInTheDocument();
    expect(getByTestId("weight-input")).toBeInTheDocument();
  });

  it("renders add set button correctly", () => {
    const { getByTestId } = render(<WrappedExerciseDetails />);
    expect(getByTestId("add-set-button")).toBeInTheDocument();
  });

  it("should add set", () => {
    const onAddSet = jest.fn();
    const { getByTestId } = render(<WrappedExerciseDetails />);
    const repsInput = getByTestId("reps-input") as HTMLInputElement;
    const weightInput = getByTestId("weight-input") as HTMLInputElement;
    const addSetButton = getByTestId("add-set-button") as HTMLButtonElement;
    addSetButton.onclick = onAddSet;
    fireEvent.change(repsInput, { target: { value: 10 } });
    fireEvent.change(weightInput, { target: { value: 100 } });
    fireEvent.click(addSetButton);
    expect(onAddSet).toHaveBeenCalled();

    expect(repsInput.value).toBe("");
    expect(weightInput.value).toBe("");
  });

  it("should not add set if reps or weight are not set", () => {
    const addSet = jest.fn();

    const { getByTestId } = render(<WrappedExerciseDetails />);
    const addSetButton = getByTestId("add-set-button");

    fireEvent.click(addSetButton);

    expect(addSet).not.toHaveBeenCalled();
  });
});
