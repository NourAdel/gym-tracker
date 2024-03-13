import { Exercise } from "@/_types";

export const getData = async (): Promise<Exercise[]> => {
  const response = await fetch(
    "https://storage.googleapis.com/fitbod-web-internal/exercises.json"
  );
  return response.json();
};
