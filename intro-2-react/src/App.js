import React from 'react';
// import React, {Component} from 'react';

import styled from 'styled-components';
import './App.css';
import Todos from './components/Todos'
import Header from './components/layout/header/Header.js';
import AddTodo from './components/AddTodo.js';

const AppBod = styled.div`
  min-width: 80vw;
  min-height: 50vh;
  background-color: blue;
  color: lime;
  border: dotted 5px lime;
  padding: 40px;
  margin: 5px;
  text-align: center;
  border-radius: 50%
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
`

function App() {  // this is a functional component (why its different from Traversy example)
// export class App extends Component {

  let addTodo = (title)=>{
    return title;
  };

  return (
    <AppBod className="App">
      <Header></Header>
      <AddTodo addTodo={addTodo}></AddTodo>
      {/* <AddTodo></AddTodo> */}
      <Todos newTodo={addTodo}/>
    </AppBod>
  );
}

export default App;
