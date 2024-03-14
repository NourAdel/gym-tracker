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
        <ExerciseContainer
          href={{
            pathname: `/exercises/${item.id}`,
            query: { name: item.name, image: item.image },
          }}
          key={item.id}
          data-testid={`exercise-link-${item.id}`}
        >
          <ExerciseImage
            src={item.image}
            alt={`${item.id}-image`}
            width={60}
            height={60}
          />
          <ExerciseDataContainer>
            <ExerciseTitle>{item.name}</ExerciseTitle>
            <ExerciseMuscle>{item.muscle}</ExerciseMuscle>
          </ExerciseDataContainer>
          <Image src={Arrow} alt={"arrow-icon"} width={20} height={40} />
        </ExerciseContainer>
      );
    });
  };

  return (
    <PageContainer data-testid='exercise-list-page'>
      <PageTitle>
        {list.length > 0 ? "Top Exercises" : "No Exercises found"}
      </PageTitle>
      <ExerciseListContainer>{renderList()}</ExerciseListContainer>
    </PageContainer>
  );
};

export default ExerciseList;
