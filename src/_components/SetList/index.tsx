import { Set } from "@/_types";

export const SetList: React.FC<{ sets: Set[] }> = ({ sets }) => {
  return (
    <div>
      <ul>
        {sets.map((set, index) => (
          <li key={index}>
            {set.date.toDateString()} - {set.reps} reps at {set.weight} kg
          </li>
        ))}
      </ul>
    </div>
  );
};
