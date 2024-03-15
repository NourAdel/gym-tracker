import { DateSet, Set } from "@/_types";
import {
  Label,
  SetContainer,
  SetDate,
  SetsContainer,
  Description,
  DateSetsContainer,
} from "./SetList.styled.";
import { useSetsContext } from "../../_store/useSetsContext";

export const SetList: React.FC = () => {
  const { sets } = useSetsContext();

  const renderDateSets = (sets: Set[]) => {
    return sets.map((set) => {
      return (
        <Description
          key={`${set.weight} x ${set.reps} ${new Date(
            set.date
          ).toLocaleDateString()}`}
        >
          <p>
            {set.reps} x {set.weight} lb{"  "}
          </p>
          <Label>
            Estimated 1RM: <span style={{ fontWeight: "400" }}>{set.rm}</span>
          </Label>
        </Description>
      );
    });
  };
  const renderDates = (dateSet: DateSet) => {
    const { date, sets } = dateSet;
    return (
      <DateSetsContainer key={new Date(date).toLocaleDateString()}>
        <SetDate>{new Date(date).toLocaleDateString()}</SetDate>
        <SetContainer>{renderDateSets(sets)}</SetContainer>
      </DateSetsContainer>
    );
  };

  return (
    <SetsContainer data-testid="set-list">
      {sets.map((dateSet) => renderDates(dateSet))}
    </SetsContainer>
  );
};
