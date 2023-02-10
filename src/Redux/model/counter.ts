import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CounterStateType } from '../storeType';

const initialState: CounterStateType = {
  count: 1,
};

export const counterReducer = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    addCount: (state) => {
      state.count += 1;
    },
    decCount: (state) => {
      state.count -= 1;
    },
    incCount: (state, action: PayloadAction<CounterStateType>) => {
      state.count += action.payload.count;
    },
  },
});

export const { addCount, decCount, incCount } = counterReducer.actions;

export default counterReducer.reducer;
