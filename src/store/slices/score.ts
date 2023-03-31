import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  score: 0,
};

const scoreSclice = createSlice({
  name: "score",
  initialState,
  reducers: {
    startQuiz: (state) => {},
  },
});

export const { startQuiz } = scoreSclice.actions;

export default scoreSclice.reducer;
