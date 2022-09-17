import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    Add: (state) => {
      state.value += 1;
    },
    Dec: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { Add, Dec, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
