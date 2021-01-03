import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type CountState = number;

const initialState: CountState = 0;

type Payload = {
  quantity: number;
};

const countSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    increment(state, {payload}: PayloadAction<Payload>) {
      return state + payload.quantity;
    },
    decrement(state, {payload}: PayloadAction<Payload>) {
      return state - payload.quantity;
    },
  },
});

export const {increment, decrement} = countSlice.actions;
export const countReducer = countSlice.reducer;
