import React from 'react';
// import React, {Component} from 'react';

import styled, { ThemeProvider } from 'styled-components';
import './App.css';
import Todos from './components/Todos'
import Header from './components/layout/header/Header.js';
import AddTodo from './components/AddTodo.js';
import uuid from 'uuid';


const AppBod = styled.div`
	min-width: 80vw;
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
	let state = {
		todos: [
			{
				id:uuid.v4(),
				title: 'item 1',
				completed: false
			},
			{
				id:uuid.v4(),
				title: 'item 2',
				completed: false
			},
			{
				id:uuid.v4(),
				title: 'item 3',
				completed: false
			},
			{
				id:uuid.v4(),
				title: 'item 4',
				completed: false
			},
			{
				id:uuid.v4(),
				title: 'item 5',
				completed: false
			},
			{
				id:uuid.v4(),
				title: 'item 6',
				completed: false
			},
			{
				id:uuid.v4(),
				title: 'item 7',
				completed: false
			},
			{
				id:uuid.v4(),
				title: 'item 8',
				completed: false
			},
			{
				id:uuid.v4(),
				title: 'item 9',
				completed: false
			},
			{
				id:uuid.v4(),
				title: 'item 10',
				completed: false
			},
			{
				id:uuid.v4(),
				title: 'item 11',
				completed: false
			},
			{
				id:uuid.v4(),
				title: 'item 12',
				completed: false
			},
			{
				id:uuid.v4(),
				title: 'item 13',
				completed: false
			},
			{
				id:uuid.v4(),
				title: 'item 14',
				completed: false
			},
			{
				id:uuid.v4(),
				title: 'item 15',
				completed: false
			}
		],
		title: ''
	}
// export class App extends Component {
	// let newTodo = {}, n=16;
	// let addTodo = (title)=>{
	// 	newTodo = {
	// 		id:uuid.v4(),
	// 		title, // same as title: title,
	// 		completed: false
	// 	}
	// 	state.todos.unshift(newTodo);
	// 	console.log(state.todos)
	// 	n++;
	// };
	// let addTodo = (title) => { // this would be fine in a Class based component, but in a functional component idk..
	// 	console.log('addTodo in app.js');
	// 	console.log(title);
	// }

	let theme = {
		main: "default" // I just guessed here, it worked?
	}

	return (
		<AppBod className="App">
			<ThemeProvider theme={theme}>
				<Header></Header>
				{/* <AddTodo addTodo={addTodo()} state={state}></AddTodo> */}
				<AddTodo state={state} />

				{/* <AddTodo></AddTodo> */}
				{/* <Todos state={state} newTodo={newTodo}/> */}
				<Todos state={state} />
			</ThemeProvider>
		</AppBod>
	);
}

export default App;
