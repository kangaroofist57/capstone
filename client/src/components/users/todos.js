import React, { Component } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCheck, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default class Todos extends Component {
    constructor() {
        super()

        this.state = {
            todos: [],
            todoProblem: null
        }
    }

    componentDidMount = () => {
        let { todos } = JSON.parse(localStorage.getItem('userInfo'));
        console.log('yes');
        this.setState({
            todos
        });
    }

    addTodo = (todos, newTodo) => {
        let userInfo = JSON.parse(localStorage.getItem('userInfo'));
        if(!this.state.newTodo) {
            this.setState({
                todoProblem: 'Please type a todo!'
            });
            setTimeout(() => {
                this.setState({
                    todoProblem: null
                });
            }, 4000);
            return;
        }
        // alert('Todo input field cannot be empty');
        newTodo = {
            name: newTodo,
            done: false,
            createdAt: new Date()
        }
        todos.push(newTodo);
        // console.log(todos);
        axios.patch('/api/addTodo', { userInfo, todos }).then(data => console.log('todos')).catch(err => {
            
        });
        this.setState({
            todos,
            newTodo: ''
        });
        userInfo.todos = todos;
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
    }

    changeHandler = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [name]: value });
    }

    toggleTodo = (todo, index) => {

        let userInfo = JSON.parse(localStorage.getItem('userInfo'));
        let todos =  this.state.todos;

        if(!todo.done) {
            todo.done = true
            todos.splice(index, 1, todo);

            axios.patch('/api/toggleTodo', {
                userInfo,
                todos
            });
            this.setState({
                todos
            });
            userInfo.todos = todos;
            localStorage.setItem('userInfo', JSON.stringify(userInfo));
        } else {
            todo.done = false
            todos.splice(index, 1, todo);
            axios.patch('/api/toggleTodo', {
                userInfo,
                todos
            });
            this.setState({
                todos
            });
            userInfo.todos = todos;
            localStorage.setItem('userInfo', JSON.stringify(userInfo));
        }
        // console.log('todo', index);
    }

    deleteTodo = (index) => {

        let userInfo = JSON.parse(localStorage.getItem('userInfo'));
        let todos = this.state.todos;

        todos.splice(index, 1);
        axios.patch('/api/deleteTodo', {
            userInfo,
            todos
        });
        this.setState({ todos });
        userInfo.todos = todos;
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
    }
    
     render() {
         return(
             <div>
                 <div className='todos-container'>
                    <div className='incomplete todos '>
                        <h3>Todos</h3>
                        <div className='todo-list'>
                            {this.state.todos.map((todo, index) => {
                                let rng = Math.random() * 10;
                                if(!todo.done) return(
                                    <div className='todo-container' key={rng}>
                                        <div className='todo-buttons'>
                                            <button className='check' onClick={() => this.toggleTodo(todo, index)}>{<FontAwesomeIcon icon={faCheck} />}</button>
                                            <button className='delete' onClick={() => this.deleteTodo(index)}>{<FontAwesomeIcon icon={faTrash} />}</button>
                                        </div>
                                        <div>{todo.name}</div>
                                    </div>
                                )
                            })}
                        </div>
                        <form>
                            <input
                                value={this.state.newTodo}
                                placeholder='Add New Todo'
                                name='newTodo'
                                onChange={this.changeHandler}
                            />
                        </form>
                            <div className='todo-problem'>{this.state.todoProblem}</div>
                            <button onClick={() => this.addTodo(this.state.todos, this.state.newTodo)}>Add Todo</button>
                    </div>
                    <div className='complete todos'>
                        <h3>Completed</h3>
                        <div className='todo-list'>
                            {this.state.todos.map((todo, index) => {
                                let rng = Math.random() * 10;
                                if(todo.done) return(
                                    <div className='todo-container' key={rng}>
                                        <div className='todo-buttons'>
                                            <button className='check' onClick={() => this.toggleTodo(todo, index)}>{<FontAwesomeIcon icon={faArrowLeft} />}</button>
                                            <button className='delete' onClick={() => this.deleteTodo(index)}>{<FontAwesomeIcon icon={faTrash} />}</button>
                                        </div>
                                        <div>{todo.name}</div>
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