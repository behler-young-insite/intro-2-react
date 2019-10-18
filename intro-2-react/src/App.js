import React from 'react';
import './App.css';
import Todos from './components/Todos'

function App() {
  return (
    <div className="App">
      <h1>Here's a list of things to do:</h1>
      <Todos/>
    </div>
  );
}

export default App;
