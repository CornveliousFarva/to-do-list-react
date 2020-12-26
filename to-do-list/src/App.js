import React, { useState } from 'react';
import Form from './components/Form'
import List from './components/List'
import './App.css';

function App() {
  const [inputText, setInputText] = useState ("")
  const [todos, setTodos] = useState ([])
  const [status, setStatus] = useState("all")
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
            todos = {todos}/>
    </div>
  );
}

export default App;
