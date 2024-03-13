"use client";

import React, { useState } from "react";
import {
  PageTitle,
  PageContainer,
  ExerciseImage,
  InputsContainer,
  SectionTitle,
  Label,
  Input,
  InputLabelContainer,
  AddSetButton,
} from "./ExerciseDetails.styled";
import { Set } from "@/_types";
import { SetList } from "../SetList";

const ExerciseDetails: React.FC<{ name: string; image: string }> = ({
  name,
  image,
}) => {
  const [reps, setReps] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [sets, setSets] = useState<Set[]>([]);

  return (
    <PageContainer>
      <PageTitle>{name}</PageTitle>
      <ExerciseImage src={image} alt={name} width={150} height={150} />
      <SectionTitle>Add set:</SectionTitle>
      <InputsContainer>
        <InputLabelContainer>
          <Label>Reps</Label>

          <Input
            type="number"
            value={reps === 0 ? "" : reps}
            placeholder="0"
            onChange={(e) => {
              setReps(Number(e.target?.value));
            }}
          />
        </InputLabelContainer>

        <InputLabelContainer>
          <Label>Weight</Label>

          <Input
            type="number"
            value={weight === 0 ? "" : weight}
            placeholder="0"
            onChange={(e) => {
              setWeight(Number(e.target?.value));
            }}
          />
        </InputLabelContainer>
        <AddSetButton
          onClick={() => {
            setSets([...sets, { date: new Date(), reps, weight, rm: 0 }]);
          }}
        >
          +
        </AddSetButton>
      </InputsContainer>

      {sets.length > 0 && (
        <React.Fragment>
          <SectionTitle>Performance:</SectionTitle>
          <SetList sets={sets} />
        </React.Fragment>
      )}
    </PageContainer>
  );
};

export default ExerciseDetails;
