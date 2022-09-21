import { createSlice } from "@reduxjs/toolkit";

export const themeReducer = createSlice({
  name: "theme",
  initialState: {
    isDark: false,
  },
  reducers: {
    setTheme: (state) => {
      state.isDark = !state.isDark;
    },
  },
});
export const { setTheme } = themeReducer.actions;
export default themeReducer.reducer;
