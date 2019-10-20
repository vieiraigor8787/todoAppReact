import React, { Component } from 'react';
import axios from 'axios';

import Header from '../template/header';
import TodoForm from '../todo/todoForm';
import TodoList from '../todo/todoList';
import { throws } from 'assert';

const URL = 'http://localhost:3003/api/todos';

export default class Todo extends Component {
    constructor(props){
        super(props)
        this.state = { description: '', list: [] }

        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleRemove = this.handleRemove.bind(this)

        this.refresh()
    }

    refresh() {
        axios.get(`${URL}?sort=-createdAt`)
            .then(resp => this.setState({ ...this.state, description: '', list: resp.data }))

    }

    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value })
    }

    handleAdd() {
        const description = this.state.description
        axios.post(URL, { description })
            .then(resp => this.refresh())
    }

    handleRemove(todo) {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => this.refresh(this.state.description))
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
                <TodoList 
                 list={this.state.list}
                 handleRemove={this.handleRemove}
                 />
            </div>
        )
    }
}