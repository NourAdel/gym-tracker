"use client";
import { Exercise, ExerciseListProps } from "@/_types";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { PageContainer } from "./Exercise.styled";

const ExerciseList: FC<ExerciseListProps> = (props) => {
  const { list } = props;
  const renderList = () => {
    return list.map((item: Exercise) => {
      return (
        <Link href={`/exercises/${item.id}`} key={item.id}>
          <Image
            src={item.image}
            alt={`${item.name} image`}
            width={60}
            height={60}
          />
          <p>{item.name}</p>
          <p>{item.muscle}</p>
        </Link>
      );
    });
  };
  return (
    <PageContainer>
      <p>Top Exercises</p>
      {renderList()}
    </PageContainer>
  );
};

export default ExerciseList;
