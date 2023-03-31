import { Question as QuestionType } from "../../types/question";
import Answers from "./Answers";
import QuestionTitle from "./QuestionTitle";

interface Props {
  question: QuestionType;
}

export default function Question({ question }: Props) {
  return (
    <div className="question">
      <QuestionTitle question={question.question} />

      <Answers />
      <button>Submit</button>
    </div>
  );
}
