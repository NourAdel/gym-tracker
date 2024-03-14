export interface Exercise {
  id: string;
  name: string;
  muscle: string;
  image: string;
}

export interface ExerciseListProps {
  list: Exercise[];
}

export interface ExercisePageProps {
  params: { slug: string };
  searchParams: {
    name: string;
    image: string;
  };
}

export interface ExerciseDetailsProps {
  name: string;
  image: string;
}
export interface Set {
  date: Date;
  reps: number;
  weight: number;
  rm: number;
}

export interface DateSet {
  date: Date;
  sets: Set[];
}
