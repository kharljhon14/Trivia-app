import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { Question as QuestionType } from '../../types/question';
import Answers from './Answers';
import QuestionTitle from './QuestionTitle';
import { add, incrementIndex } from '../../store/action';

interface Props {
  question: QuestionType;
}

export default function Question({ question }: Props) {
  const dispatch = useAppDispatch();

  const state = useAppSelector((state) => state.mainReducer.state);
  const { currentQuestion, questions } = useAppSelector((state) => state.mainReducer.questions);

  const [selectedAns, setSelectedAns] = useState('');

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();

    if (!currentQuestion || selectedAns === '') return;

    if (currentQuestion.correctAnswer === selectedAns) dispatch(add());

    if (state.currentIndex < questions.length - 1) dispatch(incrementIndex());

    setSelectedAns('');
  };

  const handleChange = (value: string) => {
    setSelectedAns(value);
  };

  return (
    <div className={`question ${state.started ? '' : 'hidden'}`}>
      <span className="question__number">{state.currentIndex + 1}</span>
      <QuestionTitle question={question.question} />
      <form onSubmit={handleSubmit} className="question__form">
        {question.selections ? <Answers handleChange={handleChange} answers={question.selections} /> : null}
        <button>Submit</button>
      </form>
    </div>
  );
}
