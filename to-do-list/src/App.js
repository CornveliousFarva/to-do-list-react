import React, { useState } from 'react';
import Form from './components/Form'
import List from './components/List'
import './App.css';

function App() {
  const [inputText, setInputText] = useState ("")
  return (
    <div className="App">
      <header>
        <h1>To-Do List</h1>
      </header>
      <Form setInputText={setInputText}/>
      <List />
    </div>
  );
}

export default App;
