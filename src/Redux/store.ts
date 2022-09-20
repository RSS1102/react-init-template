import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./model/counter";
import loginReducer from "./model/login";
export interface counter {
  counter: {
    value: number;
  };
}

export interface login {
  login: {
    isLogin: boolean;
  };
}
export default configureStore({
  reducer: {
    counter: counterReducer,
    login:loginReducer
  },
});
