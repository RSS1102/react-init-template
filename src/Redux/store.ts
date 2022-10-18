import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './model/counter';
import loginReducer from './model/login';
import themeReducer from './model/theme';

export default configureStore({
  reducer: {
    theme: themeReducer,
    counter: counterReducer,
    login: loginReducer,
  },
});
