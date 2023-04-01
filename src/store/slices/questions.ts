import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Question } from '../../types/question';
import state from './state';

interface State {
  questions: Question[];
  currentQuestion: Question | undefined;
}

const initialState: State = {
  questions: [],
  currentQuestion: undefined,
};

const questionSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    setQuestions: (state, action: PayloadAction<Question[]>) => {
      state.questions = action.payload;
    },
    setCurrentQuestion: (state, action: PayloadAction<Question>) => {
      state.currentQuestion = action.payload;
    },
  },
});

export const { setCurrentQuestion, setQuestions } = questionSlice.actions;

export default questionSlice.reducer;
