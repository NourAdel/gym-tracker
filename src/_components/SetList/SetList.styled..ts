import styled from "styled-components";

export const SetsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  margin: 10px 0;
  align-self: flex-start;
  overflow-y: auto;
  max-height: 100px;
  transition: all 0.5s linear;

  @media (max-width: 850px) {
    max-height: 150px;
    width: 100%;
  }
`;

export const SetContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 24px 48px;
  transition: all 0.5s linear;

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
    gap: 24px 0;
  }
`;

export const DateSetsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  margin-bottom: 32px;
  width: 100%;
  transition: all 0.5s linear;

  @media (max-width: 750px) {
    align-items: normal;
  }
`;

export const SetDate = styled.p`
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 24px;
`;

export const Label = styled.p`
  font-size: 14px;
  font-weight: 700;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  text-wrap: nowrap;
`;
