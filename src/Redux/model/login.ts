import { createSlice } from '@reduxjs/toolkit';

export const loginReducer = createSlice({
  name: 'login',
  initialState: {
    isLogin: false,
  },
  reducers: {
    setToken: (state) => {
      state.isLogin = true;
    },
  },
});
export const { setToken } = loginReducer.actions;
export default loginReducer.reducer;
