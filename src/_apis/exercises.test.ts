import { EXERCISES } from "@/_constants/testsData";
import { getExerciseList } from "./exercises";

global.fetch = jest.fn(
  () =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(EXERCISES),
    }) as Promise<Response>
);

describe("getExerciseList", () => {
  it("should fetch exercise list", async () => {
    const exerciseList = await getExerciseList();
    expect(exerciseList).toEqual(EXERCISES);
  });

  it("should return an empty array if theres an error", async () => {
    (fetch as jest.Mock).mockImplementationOnce(
      () =>
        Promise.resolve({
          ok: false,
        }) as Promise<Response>
    );

    const exerciseList = await getExerciseList();
    expect(exerciseList).toEqual([]);
  });
});
