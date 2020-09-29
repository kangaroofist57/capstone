import React, { Component } from 'react';

export default class Todos extends Component {
    constructor() {
        super()

        this.state = {
            todos: []
        }
    }

    addTodo = (todos, newTodo) => {
        newTodo = {
            name: newTodo,
            done: false,
            createdAt: new Date()
        }
        console.log(todos, newTodo);
        todos.push(newTodo);
        this.setState({
            todos
        })
    }

    changeHandler = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [name]: value });
    }

    toggleTodo = (todo, index) => {

        let todos =  this.state.todos;

        if(!todo.done) {
            todo.done = true
            // let todos =  this.state.todos[index] = todo;
            // return console.log(todos);
            todos.splice(index, 1, todo);
            this.setState({
                todos
            });
        } else {
            todo.done = false
            todos.splice(index, 1, todo);
            this.setState({
                todos
            });
        }
        // console.log('todo', index);
    }

    deleteTodo = (index) => {
        let todos = this.state.todos;
        todos.splice(index, 1);
        this.setState({ todos });
    }
    
     render() {
         return(
             <div>
                 <div className='todos-container'>
                    <div className='incomplete todos'>
                        <h3>Todos</h3>
                        <div className='todo-list'>
                            {this.state.todos.map((todo, index) => {
                                let rng = Math.random() * 10;
                                if(!todo.done) return(
                                    <div key={rng}>
                                        <button onClick={() => this.toggleTodo(todo, index)}>done</button>
                                        <button onClick={() => this.deleteTodo(index)}>delete</button>
                                        {todo.name}
                                    </div>
                                )
                            })}
                        </div>
                        <form>
                            <input
                                placeholder='Add New Todo'
                                name='newTodo'
                                onChange={this.changeHandler}
                            />
                        </form>
                            <button onClick={() => this.addTodo(this.state.todos, this.state.newTodo)}>Add</button>
                    </div>
                    <div className='complete todos'>
                        <h3>Completed</h3>
                        <div className='todo-list'>
                            {this.state.todos.map((todo, index) => {
                                let rng = Math.random() * 10;
                                if(todo.done) return(
                                    <div key={rng}>
                                        <button onClick={() => this.toggleTodo(todo, index)}>done</button>
                                        <button onClick={() => this.deleteTodo(index)}>delete</button>
                                        {todo.name}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                 </div>
             </div>
         );
     }
}