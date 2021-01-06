import {combineReducers} from '@reduxjs/toolkit';
import {countReducer} from './count';
import { api } from '../api/stripe.generated';

const rootReducer = combineReducers({
  count: countReducer,
  [api.reducerPath]: api.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
