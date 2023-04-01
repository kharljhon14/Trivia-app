import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  score: 0,
};

const scoreSclice = createSlice({
  name: 'score',
  initialState,
  reducers: {
    reset: (state) => {
      state.score = 0;
    },
    add: (state) => {
      state.score += 1;
    },
  },
});

export const { reset, add } = scoreSclice.actions;

export default scoreSclice.reducer;
