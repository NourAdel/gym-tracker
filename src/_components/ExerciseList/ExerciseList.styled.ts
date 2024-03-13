import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 32px;
`;

export const PageTitle = styled.p`
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 48px;
`;

export const ExerciseListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 32px 50px;
  margin: 0 auto;

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;

export const ExerciseContainer = styled(Link)`
  width: 329px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    transform: scale(1.01);
  }
`;

export const ExerciseDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding-block: 2px;
  flex: 1;
`;

export const ExerciseImage = styled(Image)`
  margin-inline-end: 24px;
  object-fit: cover;
`;

export const ExerciseTitle = styled.p`
  font-size: 16px;
  font-weight: 700;
`;

export const ExerciseMuscle = styled.p`
  font-size: 14px;
  font-weight: 400;
`;
