import { createSlice } from "@reduxjs/toolkit";

const defaultTodos = [
  {
    id: 1,
    title: "Develop a User Authentication System for a Web Application",
    description: "Implement user authentication functionality using modern authentication protocols such as OAuth 2.0 or JWT.Design and develop user registration, login, logout, and password reset functionalities.Ensure security by implementing measures like password hashing, CSRF protection, and rate limiting.Integrate the authentication system with the frontend and backend components of the web application.Test the authentication flow thoroughly to identify and fix any vulnerabilities or usability issues.",
    completed: true,
    priority: "High",
    createdAt: new Date('Tuesday, May 14, 2024 10:00:00').getTime()
  },
  {
    id: 2,
    title: " Create a Mobile-First Landing Page for a Product Website",
    description: "Design a visually appealing landing page optimized for mobile devices using responsive web design principles.Develop interactive elements and animations to engage users and encourage interaction with the page.Implement smooth scrolling and navigation for a seamless user experience on mobile devices.Optimize the page load performance by minimizing assets, leveraging browser caching, and lazy loading content.Conduct usability testing on different mobile devices to ensure the landing page functions flawlessly across various screen sizes and resolutions.",
    completed: false,
    priority: "Urgent",
    createdAt: new Date('Tuesday, May 14, 2024 10:00:00').getTime()
  },
  {
    id: 3,
    title: "Build a RESTful API for a Mobile App",
    description: "Design and develop a RESTful API to serve data and functionalities required by a mobile application.Define clear API endpoints and data structures following REST principles for easy consumption by the client-side application.Implement authentication and authorization mechanisms to secure the API endpoints and prevent unauthorized access.Use appropriate HTTP methods (GET, POST, PUT, DELETE) for CRUD operations and adhere to RESTful best practices.Document the API endpoints, request/response formats, and usage guidelines for the mobile app development team.",
    completed: false,
    priority: "Normal",
    createdAt: new Date('Tuesday, May 14, 2024 10:00:00').getTime()
  },
  {
    id: 4,
    title: "Implement a responsive design for a new feature on a web application and ensure it functions correctly on both web and mobile platforms.",
    description: "Develop a responsive layout using HTML, CSS, and JavaScript to accommodate various screen sizes and devices.Use media queries and flexible grid systems to ensure the design adapts smoothly to different viewport sizes.Implement interactive elements using JavaScript to enhance user experience on both web and mobile platforms.Test the feature thoroughly on different browsers and devices to ensure compatibility and responsiveness.Collaborate with the backend development team to integrate frontend components with the server-side functionality.Optimize the performance of the feature to ensure fast loading times and smooth user interactions.",
    completed: false,
    priority: "Low",
    createdAt: new Date('Tuesday, May 14, 2024 10:00:00').getTime()
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
