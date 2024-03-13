import ExerciseDetails from "@/_components/ExerciseDetails";
import { ExercisePageProps } from "@/_types";
import React from "react";

export default async function ExercisePage({
  searchParams,
}: ExercisePageProps) {
  return (
    <ExerciseDetails image={searchParams.image} name={searchParams.name} />
  );
}
