// import React, {Component} from 'react';
import React from 'react';
import styled from 'styled-components';
const Checkbox = require('../../node_modules/@insitesoft/mobius/Checkbox').default;

const ListItem = styled.h3`
    text-align: center;
    color: orange;
    background-color: #383838;
    width: 100%;
    border-radius: 5px;
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
            }
        ]
    }

    render() {
        return this.state.todos.map((todo)=>
            <ListItem> <Checkbox />  {todo.title} </ListItem>
        )
    }
}

export default Todos;