import {configureStore, Action} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import {ThunkAction} from 'redux-thunk';

import rootReducer, {RootState} from './root-reducer';
import {api} from '../api';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export default store;
