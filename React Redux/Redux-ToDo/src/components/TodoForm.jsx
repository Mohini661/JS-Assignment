import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../features/todos/todoSlice";

const TodoForm = ({ editTodo, setEditTodo }) => {
  const [todo, setTodo] = useState(editTodo ? editTodo.todo : "");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editTodo) {
      dispatch(updateTodo({ id: editTodo.id, newTodo: todo }));
      setEditTodo(null);
    } else {
      dispatch(
        addTodo({
          id: Date.now(),
          todo,
        })
      );
    }
    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex items-center space-x-4">
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter Todo"
        className="p-2 border border-gray-300 rounded-md w-full"
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        {editTodo ? "Update Todo" : "Add Todo"}
      </button>
    </form>
  );
};

export default TodoForm;
