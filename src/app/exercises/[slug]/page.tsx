'use client'
import React from "react";

export default async function ExercisePage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div>
      <h1>{params.slug}</h1>
    </div>
  );
}
