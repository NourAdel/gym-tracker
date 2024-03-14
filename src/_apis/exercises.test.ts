import { getExerciseList } from "./exercises";

const MOCK_LIST = [
  { id: 1, name: "Bench Press" },
  { id: 2, name: "Squat" },
  { id: 3, name: "Deadlift" },
];

global.fetch = jest.fn(
  () =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(MOCK_LIST),
    }) as Promise<Response>
);

describe("getExerciseList", () => {
  it("should fetch exercise list", async () => {
    const exerciseList = await getExerciseList();
    expect(exerciseList).toEqual(MOCK_LIST);
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
