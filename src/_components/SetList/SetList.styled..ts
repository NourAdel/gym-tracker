import styled from "styled-components";

export const SetsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  margin: 10px 0;
  width: 100%;
  overflow-y: auto;
  max-height: 100px;
`;

export const SetContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 15px 48px;
`;

export const DateSetsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  margin-bottom: 32px;
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
`;
