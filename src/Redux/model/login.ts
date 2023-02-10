import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginStateType } from '../storeType';

const initialState: LoginStateType = {
  token: '',
};

export const loginReducer = createSlice({
  name: 'login',
  initialState: initialState,
  reducers: {
    setToken: (state, action: PayloadAction<LoginStateType>) => {
      console.log(action);
      state.token = action.payload.token;
    },
  },
});
export const { setToken } = loginReducer.actions;
export default loginReducer.reducer;
