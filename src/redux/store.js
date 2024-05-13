import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slice/TodoSlice";

export default configureStore({
  reducer: {
    todos: todoReducer,
  },
});
