import { useAppSelector } from '../../store';
import { Question as QuestionType } from '../../types/question';
import Answers from './Answers';
import QuestionTitle from './QuestionTitle';

interface Props {
  question: QuestionType;
}

export default function Question({ question }: Props) {
  const state = useAppSelector((state) => state.mainReducer.state);

  const handleSubmit = () => {};

  return (
    <div className={`question ${state.started ? '' : 'hidden'}`}>
      <QuestionTitle question={question.question} />
      {question.selections ? <Answers answers={question.selections} /> : null}
      <button>Submit</button>
    </div>
  );
}
