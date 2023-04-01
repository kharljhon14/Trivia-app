import { Question } from '../types/question';
import { QuestionBuilder } from '../types/questionBuilder';

export default function questionBuilder(question: Question): QuestionBuilder {
  let randomizeOrderAnswers: string[] = [];

  const builder: QuestionBuilder = {
    randomizeOrderOfAnswer: function (): QuestionBuilder {
      randomizeOrderAnswers = [...question.incorrectAnswers, question.correctAnswer];

      for (let i = randomizeOrderAnswers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [randomizeOrderAnswers[i], randomizeOrderAnswers[j]] = [randomizeOrderAnswers[j], randomizeOrderAnswers[i]];
      }

      return this;
    },
    build: function (): Question {
      return { ...question, selections: randomizeOrderAnswers };
    },
  };

  return builder;
}
