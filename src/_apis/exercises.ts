import { Exercise } from "@/_types";

export const getExerciseList = async (): Promise<Exercise[]> => {
  const response = await fetch(
    "https://storage.googleapis.com/fitbod-web-internal/exercises.json"
  );
  if (!response.ok) {
    return [];
  }
  const data = await response.json();
  return data;
};
