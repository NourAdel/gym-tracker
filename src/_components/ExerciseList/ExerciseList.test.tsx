import React from "react";
import { render } from "@testing-library/react";
import ExerciseList from ".";
import { EXERCISES } from "@/_constants/testsData";

describe("ExerciseList", () => {
  it("renders empty exercise list component", () => {
    const { getByText } = render(<ExerciseList list={[]} />);
    expect(getByText("No Exercises found")).toBeInTheDocument();
  });

  it("renders exercise list correctly", () => {
    const { getByText } = render(<ExerciseList list={EXERCISES} />);

    expect(getByText("Top Exercises")).toBeInTheDocument();
    expect(getByText("Exercise 1")).toBeInTheDocument();
    expect(getByText("muscle1")).toBeInTheDocument();
    expect(getByText("Exercise 2")).toBeInTheDocument();
    expect(getByText("muscle2")).toBeInTheDocument();
    expect(getByText("Exercise 1").closest("a")).toHaveAttribute(
      "href",
      "/exercises/exercise-1?name=Exercise+1&image=https%3A%2F%2Fvia.placeholder.com%2F60"
    );

    expect(getByText("Exercise 2").closest("a")).toHaveAttribute(
      "href",
      "/exercises/exercise-2?name=Exercise+2&image=https%3A%2F%2Fvia.placeholder.com%2F60"
    );
  });

  it("renders the right images with the right attributes", () => {
    const { getByAltText, getAllByAltText } = render(
      <ExerciseList list={EXERCISES} />
    );

    expect(getAllByAltText("arrow-icon")).toHaveLength(2);
    expect(getByAltText("exercise-1-image")).toHaveAttribute("src");
    expect(getByAltText("exercise-2-image")).toHaveAttribute("src");
    expect(getByAltText("exercise-1-image")).toHaveAttribute("width", "60");
    expect(getByAltText("exercise-2-image")).toHaveAttribute("width", "60");
    expect(getByAltText("exercise-1-image")).toHaveAttribute("height", "60");
    expect(getByAltText("exercise-2-image")).toHaveAttribute("height", "60");
  });

  it("passes the right params to the exercise page", () => {
    const { getByTestId } = render(<ExerciseList list={EXERCISES} />);

    expect(getByTestId("exercise-link-exercise-1")).toHaveAttribute(
      "href",
      "/exercises/exercise-1?name=Exercise+1&image=https%3A%2F%2Fvia.placeholder.com%2F60"
    );

    expect(getByTestId("exercise-link-exercise-2")).toHaveAttribute(
      "href",
      "/exercises/exercise-2?name=Exercise+2&image=https%3A%2F%2Fvia.placeholder.com%2F60"
    );
  });
});
