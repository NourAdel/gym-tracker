import { render } from "@testing-library/react";
import ExercisePage from "./page";
import { SetsContext } from "@/_store/useSetsContext";
import { SETS } from "@/_constants/testsData";

const WrappedExercisePage = () => {
  return (
    <SetsContext.Provider
      value={{
        sets: SETS,
        slug: "",
        setSlug: () => {},
        addSet: () => {},
      }}
    >
      <ExercisePage
        params={{ slug: "exercise-1" }}
        searchParams={{
          image: "https://example.com/images/1.jpg",
          name: "Exercise 1",
        }}
      />
    </SetsContext.Provider>
  );
};
describe("Exercise page Component", () => {
  it("renders correctly", async () => {
    const page = await WrappedExercisePage();

    const { getByTestId } = render(page);

    expect(getByTestId("exercise-page")).toBeInTheDocument();
  });
});
