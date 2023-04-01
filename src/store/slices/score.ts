import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  score: 0,
};

const scoreSclice = createSlice({
  name: "score",
  initialState,
  reducers: {
    reset: (state) => {
      state.score = 0;
    },
    add: (state, action: PayloadAction<number>) =>{
      state.score += action.payload
    },
    minus:(state, action: PayloadAction<number>) =>{
      state.score -= action.payload
    }
  },
});

export const { reset } = scoreSclice.actions;

export default scoreSclice.reducer;
