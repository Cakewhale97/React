import React, { useState } from 'react';
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Header from "./components/Header";
import Main from "./components/Main";
import Image from "./components/Image";
import './App.css'

function App() {
  const name = "Ada Lovelace"
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  }

  return (
   
    <div>
      <Header name={name} />
      
      <Main  />
      <Image />
      <div className='Todo'>
      <h1>Todo App</h1>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} />
      </div>
      
    </div>
  );

}

export default App
