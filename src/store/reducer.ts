import { combineReducers } from "redux";

import type store from "./index";
import baseApi from "./thunks/base";

const apiReducers = {
  [baseApi.reducerPath]: baseApi.reducer,
};

const rootReducer = combineReducers({
  ...apiReducers,
});

export type RootState = ReturnType<typeof store.getState>;

export default rootReducer;
