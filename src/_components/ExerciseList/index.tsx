"use client";

import React, { FC } from "react";
import Image from "next/image";
import { Exercise, ExerciseListProps } from "@/_types";
import {
  ExerciseContainer,
  ExerciseDataContainer,
  ExerciseImage,
  ExerciseListContainer,
  ExerciseMuscle,
  ExerciseTitle,
  PageContainer,
  PageTitle,
} from "./ExerciseList.styled";
import Arrow from "../../../assets/arrow-right.svg";

const ExerciseList: FC<ExerciseListProps> = (props) => {
  const { list } = props;

  const renderList = () => {
    return list.map((item: Exercise) => {
      return (
        <ExerciseContainer href={`/exercises/${item.id}`} key={item.id}>
          <ExerciseImage
            src={item.image}
            alt={`${item.name} image`}
            width={60}
            height={60}
          />
          <ExerciseDataContainer>
            <ExerciseTitle>{item.name}</ExerciseTitle>
            <ExerciseMuscle>{item.muscle}</ExerciseMuscle>
          </ExerciseDataContainer>
          <Image
            src={Arrow}
            alt={`${item.name} image`}
            width={20}
            height={40}
          />
        </ExerciseContainer>
      );
    });
  };

  return (
    <PageContainer>
      <PageTitle>Top Exercises</PageTitle>
      <ExerciseListContainer>{renderList()}</ExerciseListContainer>
    </PageContainer>
  );
};

export default ExerciseList;
