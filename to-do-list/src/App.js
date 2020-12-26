import React, { useState, useEffect } from 'react';
import Form from './components/Form'
import List from './components/List'
import './App.css';

function App() {
  
  // State items
  const [inputText, setInputText] = useState ("");
  const [todos, setTodos] = useState ([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

// Use Effect
useEffect(() => {
  const filterHandler = () => {
    switch(status){
      case 'complete':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'incomplete':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos);
        break
    };
  };

  filterHandler()
}, [todos, status])

  
  return (
    <div className="App">
      <header>
        <h1> To-Do List </h1>
      </header>
      <Form  
            inputText = {inputText}
            todos = {todos} 
            setTodos = {setTodos} 
            setInputText = {setInputText}
            setStatus={setStatus}
            />
      <List 
            setTodos = {setTodos}
            todos = {todos}
            filteredTodos={filteredTodos}
            />
    </div>
  );
}

export default App;
