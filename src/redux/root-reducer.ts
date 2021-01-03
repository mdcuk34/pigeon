import {combineReducers} from '@reduxjs/toolkit';
import {countReducer} from './count';

const rootReducer = combineReducers({
  count: countReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
