import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Checkbox = require('../../node_modules/@insitesoft/mobius/Checkbox').default;
const Trash2 = require('../../node_modules/@insitesoft/mobius/Icons/Trash2.js').default;


// this is a styled component:
const ListItem = styled.h3`
    text-align: center;
    color: orange;
    background-color: #383838;
    width: 100%;
    border-radius: 5px;
    line-height: 2.5;
    font-size: 1.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-content: center;
    align-items: center;
`;

// trying to pile styling onto these stled components breaks it
// Checkbox = styled.div`
//     color: red;
//     background-color: blue;
// `

const TrashButton = styled.button`
    background-color: red;
    border: none;
    padding: 5px;
    border-radius: 5px;
`

export class TodoItem extends Component {
    getStyle = ()=>{
        // if(this.props.todo.completed){
        //     return {textDecoration: 'line-through'}
        // } else {
        //     return {textDecoration: 'none'}
        // }
        return {
            padding: '10px',
            borderBottom: '1px solid red',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none' // ternary operator of above, just less code
        }
    }

    markComplete = (e)=>{
        console.log('todoItem.js'); // won't execute?
    }

    deleteItem = (id)=>{
        console.log(id);
    }

    render() {

        const {id, title} = this.props.todo; // destructuring

        return (
            <ListItem style={this.getStyle()}>
                {/* <Checkbox onChange={this.props.markComplete.bind(this, this.props.todo.id)} css="border-radius: 5px;" style={{ border: 'purple 3px solid', padding: '5px', margin: '2px' }}/> */}
                <Checkbox onChange={this.props.markComplete.bind(this, id)} css="border-radius: 5px;" style={{ border: 'purple 3px solid', padding: '5px', margin: '2px' }} />
                {/* <span>{this.props.todo.title}</span></ListItem> */}
                <span>{title}</span>
                <TrashButton onClick={this.props.deleteItem.bind(this, id)}>
                    <Trash2 css="height: 50px;"></Trash2>
                </TrashButton>
            </ListItem>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired // this is throwing an undefined error, 
}

export default TodoItem
