import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload); // Add new todo
    },

    updateTodo: (state, action) => {
      const { id, newTodo } = action.payload;
      const todoIndex = state.todos.findIndex((todo) => todo.id === id);
      if (todoIndex >= 0) {
        state.todos[todoIndex].todo = newTodo;
      }
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo, updateTodo, deleteTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
