import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  started: false,
  ended: false,
};

const stateSlice = createSlice({
  name: 'state',
  initialState,
  reducers: {
    start: (state, action: PayloadAction<boolean>) => {
      state.started = action.payload;
    },
    loading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    end: (start, action: PayloadAction<boolean>) => {
      start.ended = action.payload;
    },
  },
});

export const { start, loading, end } = stateSlice.actions;

export default stateSlice.reducer;
