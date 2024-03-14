import { render } from "@testing-library/react";
import Home from "./page";
import { EXERCISES } from "@/_constants/testsData";

global.fetch = jest.fn(
  () =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(EXERCISES),
    }) as Promise<Response>
);

describe("Home Page Component", () => {
  it("renders correctly", async () => {
    const HomePage = await Home();
    const { getByTestId } = render(HomePage);
    expect(getByTestId("exercise-list-page")).toBeInTheDocument();
  });
});
