import React, { Component } from 'react'
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
    state = {
        title: ''
    }

    onChange = (e)=>{
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = (e)=>{
        e.preventDefault();
        console.log(this)
        this.props.addTodo(this.state.title); // passess data up the tree to element in app.js
        this.setState({ title: ''}); // resets text field to ''
    }

    addTodo = (e)=>{
        console.log('addTodo.js');
    }

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
