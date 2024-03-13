import { getData } from "@/_apis/exercises";
import ExerciseList from "@/_components/ExerciseList";

export default async function Home() {
  const data = await getData();
  return <ExerciseList list={data} />;
}
``;
