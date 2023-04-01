export interface Question {
  category: string;
  id: string;
  correctAnswer: string;
  incorrectAnswers: string[];
  selections?: string[];
  question: string;
  difficulty: string;
}
