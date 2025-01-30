import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className=" flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-xl">
        <h1 className="text-3xl font-bold text-center mb-6">
          Redux Toolkit CRUD App
        </h1>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
