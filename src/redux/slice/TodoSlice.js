import { createSlice } from "@reduxjs/toolkit";

const defaultTodos = [
  {
    id: 1,
    title: "Default Todo 4",
    description: "This is the first default todo",
    completed: true,
    priority: "High",
    createdAt: 'Tuesday, May 14, 2024 at 10:00 AM'
  },
  {
    id: 2,
    title: "Default Todo 3",
    description: "This is the second default todo",
    completed: false,
    priority: "Urgent",
    createdAt: 'Tuesday, May 14, 2024 at 10:00 AM'
  },
  {
    id: 3,
    title: "Default Todo 2",
    description: "This is the third default todo",
    completed: false,
    priority: "Normal",
    createdAt: 'Tuesday, May 14, 2024 at 10:00 AM'
  },
  {
    id: 4,
    title: "Default Todo 1",
    description: "This is the fourth default todo",
    completed: false,
    priority: "Low",
    createdAt: 'Tuesday, May 14, 2024 at 10:00 AM'
  }
];

let storedTodos = JSON.parse(localStorage.getItem("todos"));

if (!storedTodos || !Array.isArray(storedTodos) || storedTodos.length === 0) {
  storedTodos = defaultTodos;
  localStorage.setItem("todos", JSON.stringify(storedTodos));
}

const initialState = storedTodos;

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

export const { addTodo, toggleComplete, deleteTodo, filterByPriority } = todoSlice.actions;

export default todoSlice.reducer;
