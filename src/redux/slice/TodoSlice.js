import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("todos")) || [];


export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: new Date().getTime(),
        title: action.payload.title,
        description: action.payload.description,
        completed: false,
        priority: action.payload.priority,
        createdAt: new Date().getTime(),
      };
      state.push(todo);
      localStorage.setItem("todos", JSON.stringify(state));
    },
    toggleComplete: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
      localStorage.setItem("todos", JSON.stringify(state));
    },
    deleteTodo: (state, action) => {
      const newState = state.filter((todo) => todo.id !== action.payload.id);
      localStorage.setItem("todos", JSON.stringify(newState));
      return newState;
    },
    filterByPriority: (state, action) => {
      const filteredTodos = state.filter(
        (todo) => todo.priority === action.payload
      );  
      return filteredTodos;
    },
  },
});

export const { addTodo, toggleComplete, deleteTodo,filterByPriority } = todoSlice.actions;

export default todoSlice.reducer;
