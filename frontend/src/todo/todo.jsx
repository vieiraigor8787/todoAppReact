import React, { Component } from 'react';
import axios from 'axios';

import Header from '../template/header';
import TodoForm from '../todo/todoForm';
import TodoList from '../todo/todoList';

const URL = 'http://localhost:3003/api/todos';

export default class Todo extends Component {
    constructor(props){
        super(props)
        this.state = { description: '', list: [] }

        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
    }

    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value })
    }

    handleAdd() {
        const description = this.state.description
        axios.post(URL, { description })
            .then(resp => console.log(description))
    }

    render() {
        return (
            <div>
                <Header name='Tarefas' small='Cadastro' />
                <TodoForm 
                 handleAdd={this.handleAdd} 
                 description={this.state.description}
                 handleChange={this.handleChange}
                />
                <TodoList />
            </div>
        )
    }
}