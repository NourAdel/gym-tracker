import ExerciseList from "@/_components/ExerciseList";
import { PageContainer } from "@/_components/ExerciseList/Exercise.styled";
import { Exercise } from "@/_types";

const getData = async (): Promise<Exercise[]> => {
  const response = await fetch(
    "https://storage.googleapis.com/fitbod-web-internal/exercises.json",
    {
      next: {
        revalidate: 0,
      },
    }
  );
  return response.json();
};
export default async function Home() {
  const data = await getData();
  return (
    <>
      <ExerciseList list={data} />
    </>
  );
}
