import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo, deleteTodo } from "../features/todos/todoSlice";

const TodoItem = ({ todo, setEditTodo }) => {
  const dispatch = useDispatch();

  const handleUpdate = () => {
    setEditTodo(todo);
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <div className="flex justify-between items-center border-b py-2 px-4">
      <span>{todo.todo}</span>
      <div className="space-x-2">
        <button
          onClick={handleUpdate}
          className="text-blue-500 hover:text-blue-700"
        >
          Edit
        </button>

        <button
          onClick={handleDelete}
          className="text-red-500 hover:text-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
