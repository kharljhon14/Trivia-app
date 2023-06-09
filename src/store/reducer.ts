import { combineReducers } from 'redux';
import state from './slices/state';
import score from './slices/score';
import questions from './slices/questions';

import type store from './index';
import baseApi from './thunks/base';

const mainReducer = combineReducers({
  state,
  score,
  questions,
});

const apiReducers = {
  [baseApi.reducerPath]: baseApi.reducer,
};

const rootReducer = combineReducers({
  mainReducer,
  ...apiReducers,
});

export type RootState = ReturnType<typeof store.getState>;

export default rootReducer;
