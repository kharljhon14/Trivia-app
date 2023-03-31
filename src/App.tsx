import { useEffect } from "react";
import { Question } from "./components";
import { useGetQuestionsQuery } from "./store/thunks/questions";
import { useAppDispatch } from "./store";
import { startQuiz } from "./store/action";

export default function App() {
  const { data, isSuccess, isLoading, isError } = useGetQuestionsQuery();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isSuccess) {
      console.log(data);
    }
  }, []);
  return (
    <div className="app">
      <Question question={data[0]} />
    </div>
  );
}
