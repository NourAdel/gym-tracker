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
import { SetList } from "../SetList";
import { useSetsContext } from "../../_store/useSetsContext";
import { ExerciseDetailsProps } from "@/_types";

const ExerciseDetails: React.FC<ExerciseDetailsProps> = ({ name, image }) => {
  const [reps, setReps] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const { sets, addSet } = useSetsContext();
  const today = new Date();


  const onRepsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReps(Number(e.target?.value.replace(/[^0-9]/, "")));
  };

  const onWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(Number(e.target?.value));
  };

  const onAddSet = () => {
    addSet({
      date: today,
      reps,
      weight,
      rm: parseFloat((weight * (36 / (37 - reps))).toFixed(1)),
    });
    setReps(0);
    setWeight(0);
  };

  return (
    <PageContainer data-testid={"exercise-page"}>
      <PageTitle>{name}</PageTitle>
      <ExerciseImage src={image} alt={name} width={150} height={150} />
      <SectionTitle>Add set:</SectionTitle>
      <InputsContainer>
        <InputLabelContainer>
          <Label>Reps</Label>

          <Input
            type="text"
            value={reps === 0 ? "" : reps}
            placeholder="0"
            onChange={(e) => {
              onRepsChange(e);
            }}
            data-testid="reps-input"
          />
        </InputLabelContainer>

        <InputLabelContainer>
          <Label>Weight</Label>

          <Input
            type="number"
            value={weight === 0 ? "" : weight}
            placeholder="0"
            onChange={(e) => onWeightChange(e)}
            data-testid="weight-input"
          />
        </InputLabelContainer>
        <AddSetButton onClick={() => onAddSet()} data-testid="add-set-button">
          +
        </AddSetButton>
      </InputsContainer>

      {sets.length > 0 && (
        <React.Fragment>
          <SectionTitle>Performance:</SectionTitle>
          <SetList />
        </React.Fragment>
      )}
    </PageContainer>
  );
};

export default ExerciseDetails;
