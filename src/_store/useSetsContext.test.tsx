import { renderHook } from "@testing-library/react";
import { SetsContextProvider, useSetsContext } from "./useSetsContext";
import { Set } from "@/_types";
import { act } from "react-dom/test-utils";

describe("useSetsContext", () => {
  beforeAll(() => {
    const { result } = renderHook(() => useSetsContext(), {
      wrapper: SetsContextProvider,
    });

    act(() => {
      result.current.sets = [];
      result.current.slug = "";
    });
  });
  it("should provide initial context values", () => {
    const { result } = renderHook(() => useSetsContext(), {
      wrapper: SetsContextProvider,
    });

    expect(result.current.sets).toEqual([]);
    expect(result.current.slug).toBe("");
  });

  it("should update the slug value", () => {
    const { result } = renderHook(() => useSetsContext(), {
      wrapper: SetsContextProvider,
    });

    act(() => {
      result.current.setSlug("example-slug");
    });

    expect(result.current.slug).toBe("example-slug");
  });

  it("should add a new set to an existing date", () => {
    const { result } = renderHook(() => useSetsContext(), {
      wrapper: SetsContextProvider,
    });

    const newSet: Set = {
      date: new Date("2024-03-14T00:00:00.000Z"),
      weight: 2,
      reps: 2,
      rm: 2,
    };

    act(() => {
      result.current.addSet(newSet);
    });

    expect(result.current.sets).toEqual([
      { date: new Date("2024-03-14T00:00:00.000Z"), sets: [newSet] },
    ]);
    const newSet2: Set = {
      date: new Date("2024-03-14T00:00:00.000Z"),
      weight: 3,
      reps: 3,
      rm: 3,
    };

    act(() => {
      result.current.addSet(newSet2);
    });

    expect(result.current.sets).toEqual([
      { date: new Date("2024-03-14T00:00:00.000Z"), sets: [newSet, newSet2] },
    ]);
  });
});
