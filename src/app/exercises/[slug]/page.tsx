"use client";
import ExerciseDetails from "@/_components/ExerciseDetails";
import { useSetsContext } from "@/_store/useSetsContext";
import { ExercisePageProps } from "@/_types";
import React, { useEffect } from "react";

export default function ExercisePage({
  params,
  searchParams,
}: ExercisePageProps) {
  const { setSlug } = useSetsContext();

  useEffect(() => {
    setSlug(params.slug);
  }, [params.slug, setSlug]);

  return (
    <ExerciseDetails image={searchParams.image} name={searchParams.name} />
  );
}
