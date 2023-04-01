import { Question } from './question';

export interface QuestionBuilder {
  randomizeOrderOfAnswer(): QuestionBuilder;
  build(): Question;
}
