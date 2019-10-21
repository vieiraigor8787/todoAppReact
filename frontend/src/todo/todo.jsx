import React from 'react';

import Header from '../template/header';
import TodoForm from '../todo/todoForm';
import TodoList from '../todo/todoList';

export default props => (
    <div>
        <Header name='Tarefas' small='Cadastro' />
        <TodoForm />
        <TodoList />
    </div>
)