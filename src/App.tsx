import { useEffect, useState } from 'react';
import { Menu, Question } from './components';
import { useGetQuestionsQuery } from './store/thunks/questions';
import questionBuilder from './helpers/questionsBuilder';
import { Question as QuestionType } from './types/question';

export default function App() {
  const { data, isSuccess, isError, isLoading } = useGetQuestionsQuery();
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<QuestionType>();

  useEffect(() => {
    if (isSuccess) {
      const newQuestions = data.map((question) => questionBuilder(question).randomizeOrderOfAnswer().build());
      if (newQuestions) {
        setQuestions(newQuestions);
        setCurrentQuestion(newQuestions[0]);
      }
    }
  }, [isSuccess, isError]);
  return (
    <div className="app">
      <Menu />
      {currentQuestion ? <Question question={currentQuestion} /> : null}
    </div>
  );
}
