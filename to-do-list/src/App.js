import React from 'react';
import Form from './components/Form'
import List from './components/List'
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>To-Do List</h1>
      </header>
      <Form />
      <List />
    </div>
  );
}

export default App;
