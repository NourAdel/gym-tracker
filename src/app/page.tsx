import { getExerciseList } from "@/_apis/exercises";
import ExerciseList from "@/_components/ExerciseList";
import { Exercise } from "@/_types";

export default async function Home() {
  const data: Exercise[] = await getExerciseList();
  return <ExerciseList list={data} />;
}
``;
