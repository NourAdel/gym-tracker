import React from "react";
import { fireEvent, render } from "@testing-library/react";
import ExerciseDetails from ".";
import { SetsContext } from "@/_store/useSetsContext";
import { EXERCISES, SETS } from "@/_constants/testsData";

const WrappedExerciseDetails = () => {
  return (
    <SetsContext.Provider
      value={{
        sets: SETS,
        slug: "",
        setSlug: () => {},
        addSet: () => {},
      }}
    >
      <ExerciseDetails {...EXERCISES[0]} />
    </SetsContext.Provider>
  );
};
describe("ExerciseDetails", () => {
  it("renders exercise name and image correctly", () => {
    const { getByText, getByAltText } = render(<WrappedExerciseDetails />);
    expect(getByText("Exercise 1")).toBeInTheDocument();
    expect(getByAltText("Exercise 1")).toBeInTheDocument();
    expect(getByAltText("Exercise 1")).toHaveAttribute("src");
    expect(getByAltText("Exercise 1")).toHaveAttribute("width", "150");
    expect(getByAltText("Exercise 1")).toHaveAttribute("height", "150");
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
