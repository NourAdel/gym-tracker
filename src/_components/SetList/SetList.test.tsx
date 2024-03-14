import { SetsContext } from "@/_store/useSetsContext";
import { SetList } from ".";
import { render } from "@testing-library/react";
import { SETS } from "@/_constants/testsData";

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
      <SetList />
    </SetsContext.Provider>
  );
};

describe("SetList", () => {
  it("renders set list correctly", () => {
    const { getByTestId } = render(<WrappedExerciseDetails />);
    expect(getByTestId("set-list")).toBeInTheDocument();
  });

  it("render set's details correctly", () => {
    const { getByText } = render(<WrappedExerciseDetails />);
    expect(getByText("3/13/2024")).toBeInTheDocument();
    expect(getByText("10 x 100 lb")).toBeInTheDocument();
    expect(getByText("Estimated 1RM:")).toBeInTheDocument();
    expect(getByText("505")).toBeInTheDocument();
  });
});
