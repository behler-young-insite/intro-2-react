// import React, {Component} from 'react';
import React from 'react';
import styled from 'styled-components';
const Checkbox = require('../../node_modules/@insitesoft/mobius/Checkbox').default;

// this is a styled component:
const ListItem = styled.h3`
    text-align: center;
    color: orange;
    background-color: #383838;
    width: 100%;
    border-radius: 5px;
    line-height: 2.5;
    font-size: 1.5rem;
`;

class Todos extends React.Component {
    state = {
        todos: [
            {
                id: 1,
                title: 'item 1',
                completed: true
            },
            {
                id: 2,
                title: 'item 2',
                completed: false
            },
            {
                id: 3,
                title: 'item 3',
                completed: false
            },
            {
                id: 4,
                title: 'item 4',
                completed: false
            },
            {
                id: 5,
                title: 'item 5',
                completed: false
            },
            {
                id: 6,
                title: 'item 6',
                completed: true
            },
            {
                id: 7,
                title: 'item 7',
                completed: false
            },
            {
                id: 8,
                title: 'item 8',
                completed: false
            },
            {
                id: 9,
                title: 'item 9',
                completed: false
            },
            {
                id: 10,
                title: 'item 10',
                completed: false
            },
            {
                id: 11,
                title: 'item 11',
                completed: true
            },
            {
                id: 12,
                title: 'item 12',
                completed: false
            },
            {
                id: 13,
                title: 'item 13',
                completed: false
            },
            {
                id: 14,
                title: 'item 14',
                completed: false
            },
            {
                id: 15,
                title: 'item 15',
                completed: false
            }
        ]
    }

    render() {
        return this.state.todos.map((todo)=>
            <ListItem> <Checkbox css="background-color: lime; border-radius: 5px;"/>  {todo.title} </ListItem>
        )
    }
}

export default Todos;