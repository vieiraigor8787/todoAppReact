import React, { Component } from 'react';
import Header from '../template/header';

export default class Todo extends Component {
    render() {
        return (
            <div>
                <Header name='Tarefas' small='Cadastro' />
            </div>
        )
    }
}