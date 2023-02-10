import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThemeStateType } from '../storeType';

const initialState: ThemeStateType = {
  isDark: false,
};

export const themeReducer = createSlice({
  name: 'theme',
  initialState: initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeStateType>) => {
      state.isDark = !action.payload.isDark;
    },
  },
});
export const { setTheme } = themeReducer.actions;
export default themeReducer.reducer;
