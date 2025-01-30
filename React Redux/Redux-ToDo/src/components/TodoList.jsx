import React, { useState } from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  const [editTodo, setEditTodo] = useState(null);

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-md">
      <TodoForm editTodo={editTodo} setEditTodo={setEditTodo} />
      <h2 className="text-2xl font-semibold text-center mb-4">Todo List</h2>

      <div className="space-y-4">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} setEditTodo={setEditTodo} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
