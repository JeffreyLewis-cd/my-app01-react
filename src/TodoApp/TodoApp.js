import React, {Component} from 'react';
import AddTodo from './AddTodo/AddTodo';
import TodoList from './TodoList/TodoList';
import Footer from './Footer/Footer';

import todos from './store';
import todomvcCss from 'todomvc-app-css/index.css'


const TodoApp = () => (
    <section className="todoapp">
        <AddTodo/>
        <TodoList todos={todos}/>
        <Footer/>
    </section>
);


export default TodoApp;