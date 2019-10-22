// import React, {Component} from 'react';
import React from 'react';
import { TodoItem } from './TodoItem';
// import PropTypes from 'prop-types'; // data validator class, note capitalization in implementation below class declaration

class Todos extends React.Component {
    // state = {
    //     todos: [
    //         {
    //             id: 1,
    //             title: 'item 1',
    //             completed: false
    //         },
    //         {
    //             id: 2,
    //             title: 'item 2',
    //             completed: false
    //         },
    //         {
    //             id: 3,
    //             title: 'item 3',
    //             completed: false
    //         },
    //         {
    //             id: 4,
    //             title: 'item 4',
    //             completed: false
    //         },
    //         {
    //             id: 5,
    //             title: 'item 5',
    //             completed: false
    //         },
    //         {
    //             id: 6,
    //             title: 'item 6',
    //             completed: false
    //         },
    //         {
    //             id: 7,
    //             title: 'item 7',
    //             completed: false
    //         },
    //         {
    //             id: 8,
    //             title: 'item 8',
    //             completed: false
    //         },
    //         {
    //             id: 9,
    //             title: 'item 9',
    //             completed: false
    //         },
    //         {
    //             id: 10,
    //             title: 'item 10',
    //             completed: false
    //         },
    //         {
    //             id: 11,
    //             title: 'item 11',
    //             completed: false
    //         },
    //         {
    //             id: 12,
    //             title: 'item 12',
    //             completed: false
    //         },
    //         {
    //             id: 13,
    //             title: 'item 13',
    //             completed: false
    //         },
    //         {
    //             id: 14,
    //             title: 'item 14',
    //             completed: false
    //         },
    //         {
    //             id: 15,
    //             title: 'item 15',
    //             completed: false
    //         }
    //     ]
    // }
    state = this.props.state;

    markComplete = (id)=>{ // id passed from onchange method binding
        console.log('Todos.js'); // this is called from TodoItem.js checkbox click onChange event
        this.setState({todos: this.state.todos.map(todo => {
            if (todo.id===id){
                todo.completed = !todo.completed; // toggle switch
            }
            return todo;
            })
        })
    }

    deleteItem = (id)=>{
        this.setState({todos: [...this.state.todos.filter(todo => todo.id!==id)]}) //... = spread operator (copies the array)
    }

    newTodo = (title)=>{
        console.log(this.newTodo);
        const newTodo = {
            id : 16,
            title: title,
            completed: false
        };
        console.log(newTodo.title+" being added to list!");
        this.setState({todos: [...this.state.todos, newTodo]});
    }

    render() {
        return this.state.todos.map((todo)=> (
            <TodoItem key={todo.id} todo={todo} markComplete={this.markComplete} deleteItem={this.deleteItem}/>
        ))
    }
}

// PropTypes
// Todos.propTypes = { // lowercase propTypes class property
//     todos: PropTypes.array.isRequired // capital PropTypes imported Class
// }
// this is throwing an error because I stored state in Todos components, in the video, he had it in app.js, but I couldn't reconcile the older app.render() with reactDom.render

export default Todos;