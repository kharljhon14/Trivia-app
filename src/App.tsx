import { useEffect } from 'react';
import { Menu, Question } from './components';
import { useGetQuestionsQuery } from './store/thunks/questions';
import questionBuilder from './helpers/questionsBuilder';
import { useAppDispatch, useAppSelector } from './store';
import { end, setCurrentQuestion, setQuestions } from './store/action';
import Result from './components/result/Result';

export default function App() {
  const { data, isSuccess, isError, refetch } = useGetQuestionsQuery();
  const dispatch = useAppDispatch();
  const { currentQuestion, questions } = useAppSelector((state) => state.mainReducer.questions);
  const { currentIndex, started } = useAppSelector((state) => state.mainReducer.state);

  const handleRefetch = () => {
    refetch();
  };

  useEffect(() => {
    if (isSuccess) {
      const newQuestions = data.map((question) => questionBuilder(question).randomizeOrderOfAnswer().build());
      if (newQuestions) dispatch(setQuestions(newQuestions));
    }
  }, [isSuccess, isError, started]);

  useEffect(() => {
    if (questions && currentIndex < questions.length) dispatch(setCurrentQuestion(questions[currentIndex]));
  }, [questions, currentIndex]);

  useEffect(() => {
    if (questions.length > 0) if (currentIndex === questions.length) dispatch(end(true));
  }, [currentIndex]);

  return (
    <div className="app">
      <Menu />
      {currentQuestion ? <Question question={currentQuestion} /> : null}
      <Result handleRefetch={handleRefetch} />
    </div>
  );
}
