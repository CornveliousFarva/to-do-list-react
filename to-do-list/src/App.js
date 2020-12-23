import React, { useState } from 'react';
import Form from './components/Form'
import List from './components/List'
import './App.css';

function App() {
  const [inputText, setInputText] = useState ("")
  const [todos, setTodos] = useState ([])
  return (
    <div className="App">
      <header>
        <h1>To-Do List {inputText}</h1>
      </header>
      <Form todos = {todos} setTodos = {setTodos} setInputText = {setInputText}/>
      <List inputText = {inputText}/>
    </div>
  );
}

export default App;
