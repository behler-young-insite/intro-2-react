import React, { Component } from 'react';
import uuid from 'uuid';
const TextField = require('../../node_modules/@insitesoft/mobius/TextField').default;


let containerStyles = {
    width: '50%',
    backgroundColor: 'purple',
    fontSize: '1.2rem',
    display: 'flex',
    flex: '10'
}

let textFieldStyles = {
    paddingLeft: '40px'
}

let addButton = {
    color: "black",
    backgroundColor: "hotpink",
    minWidth: '100px',
    flex: '2'
}

export class AddTodo extends Component {
    state = this.props.state;

    newTodo = {}
    // n = 16;

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault();
        // this.props.addTodo(this.state.title); // passess data up the tree to element in app.js
        this.addTodo(this.state.title); // passess data up the tree to element in app.js
        // this.setState({ title: '' }); // resets text field to ''
    }

    addTodo = (title) => {
        const newTodo = {
            id: uuid.v4(),
            title: title, // same as title,
            completed: false
        }
        // let newState = {
        //     ...this.state.todos, newTodo,
        // }
        this.setState({ todos: [...this.state.todos, newTodo] });

        // this.parentState.setState(); // not a function
        // this.props.state.setState();
        // this.state.todos.unshift(newTodo);
        // this.setState(newState);
        console.log(this.state);
        console.log(this.props.state);
        // n++;
        // return newTodo;
        this.setState({title: ''})
    };

    render() {
        return (
            <form style={containerStyles} onSubmit={this.onSubmit}>
                <TextField style={textFieldStyles} label="Is there anything else to do?" placeholder="are you sure?" 
                    name="title"
                    value={this.state.title}
                    onChange={this.onChange}/>
                <input style={addButton} type="submit" value="add it!" ></input>
            </form>
        )
    }
}

export default AddTodo;
