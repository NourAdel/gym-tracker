import Image from "next/image";
import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding-top: 32px;
  padding-inline: 24px;
  width: 45%;
  margin: 0 auto;
  transition: all 0.5s linear;
  @media (max-width: 900px) {
    width: 100%;
    padding-inline: 32px;
  }
`;

export const PageTitle = styled.p`
  font-size: 24px;
  font-weight: 400;
`;
export const ExerciseImage = styled(Image)`
  border-radius: 8px;
  object-fit: cover;
  margin-block: 32px;
`;
export const SectionTitle = styled.p`
  font-size: 17px;
  font-weight: 700;
  margin-bottom: 24px;
  width: fit-content;
  align-self: start;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: start;
  margin-bottom: 32px;
`;
export const Label = styled.label`
  font-size: 14px;
  font-weight: 400;
`;

export const Input = styled.input`
  width: 72px;
  height: 35px;
  border-radius: 12px;
  border: 1px solid #000000;
  padding-inline: 5px;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
    display: none;
  }
  &:hover,
  &:active,
  &:focus {
    border: 1px solid #000000;
    outline: none;
  }
`;

export const InputLabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-inline-end: 16px;
`;

export const AddSetButton = styled.button`
  width: 42px;
  height: 35px;
  border-radius: 8px;
  border: 1px solid #000000;
  background-color: #0085bf;
  color: white;
  margin-inline-start: 32px;
  transition: all 0.3s linear;
  cursor: pointer;
  &:hover {
    background-color: #ffffff;
    color: #000000;
  }
`;
