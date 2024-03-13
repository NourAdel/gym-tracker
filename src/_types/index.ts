export interface Exercise {
  id: string;
  name: string;
  muscle: string;
  image: string;
}

export interface ExerciseListProps {
  list: Exercise[];
}
