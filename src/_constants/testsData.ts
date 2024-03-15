import { DateSet, Exercise } from "@/_types";

export const SETS: DateSet[] = [
  {
    date: new Date("2024-03-14T00:00:00.000Z"),
    sets: [
      {
        date: new Date("2024-03-14T00:00:00.000Z"),
        reps: 10,
        weight: 100,
        rm: 505,
      },
    ],
  },
];

export const SETSWITHDIFFERENTDATE: DateSet[] = [
  {
    date: new Date("2024-03-14T00:00:00.000Z"),
    sets: [
      {
        date: new Date("2024-03-14T00:00:00.000Z"),
        reps: 10,
        weight: 100,
        rm: 505,
      },
    ],
  },
  {
    date: new Date("2024-03-15T00:00:00.000Z"),
    sets: [
      {
        date: new Date("2024-03-15T00:00:00.000Z"),
        reps: 10,
        weight: 100,
        rm: 505,
      },
    ],
  },
];
export const EXERCISES: Exercise[] = [
  {
    id: "exercise-1",
    name: "Exercise 1",
    muscle: "muscle1",
    image: "https://via.placeholder.com/60",
  },
  {
    id: "exercise-2",
    name: "Exercise 2",
    muscle: "muscle2",
    image: "https://via.placeholder.com/60",
  },
];
