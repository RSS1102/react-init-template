import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
export interface counter {
  counter: {
    value: number;
  };
}
export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
