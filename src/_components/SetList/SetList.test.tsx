import { SetsContext } from "@/_store/useSetsContext";
import { SetList } from ".";
import { render } from "@testing-library/react";

const WrappedExerciseDetails = () => {
  return (
    <SetsContext.Provider
      value={{
        sets: [
          {
            date: new Date("2024-03-14T00:00:00.000Z"),
            sets: [
              {
                date: new Date(),
                reps: 10,
                weight: 100,
                rm: 505,
              },
            ],
          },
        ],
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
