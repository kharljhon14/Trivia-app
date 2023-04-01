import { useEffect } from 'react';
import { Menu, Question } from './components';
import { useGetQuestionsQuery } from './store/thunks/questions';
import questionBuilder from './helpers/questionsBuilder';
import { useAppDispatch, useAppSelector } from './store';
import { setCurrentQuestion, setQuestions } from './store/action';

export default function App() {
  const { data, isSuccess, isError } = useGetQuestionsQuery();

  const dispatch = useAppDispatch();
  const { currentQuestion, questions } = useAppSelector((state) => state.mainReducer.questions);
  const { currentIndex } = useAppSelector((state) => state.mainReducer.state);

  useEffect(() => {
    if (isSuccess) {
      const newQuestions = data.map((question) => questionBuilder(question).randomizeOrderOfAnswer().build());
      if (newQuestions) dispatch(setQuestions(newQuestions));
    }
  }, [isSuccess, isError]);

  useEffect(() => {
    if (questions) dispatch(setCurrentQuestion(questions[currentIndex]));
  }, [questions, currentIndex]);

  return (
    <div className="app">
      <Menu />
      {currentQuestion ? <Question question={currentQuestion} /> : null}
    </div>
  );
}
