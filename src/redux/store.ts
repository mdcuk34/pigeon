import {configureStore, Action} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import {ThunkAction} from 'redux-thunk';

import rootReducer, {RootState} from './root-reducer';

const store = configureStore({
  reducer: rootReducer,
});

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export default store;
