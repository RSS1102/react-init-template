import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import loginReducer from '@/redux/model/login';
import themeReducer from '@/redux/model/theme';
import counterReducer from '@/redux/model/counter';

export const store = configureStore({
  reducer: {
    loginReducer: loginReducer,
    themeReducer: themeReducer,
    counterReducer: counterReducer,
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export default store;
