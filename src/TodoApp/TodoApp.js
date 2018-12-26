import React, {Component} from 'react';
import AddTodo from './AddTodo/AddTodo';
import TodoList from './TodoList/TodoList';
import Footer from './Footer/Footer';

import todos from './store';

const TodoApp=()=>(
    <div>
        <AddTodo/>
        <TodoList todos={todos}/>
        <Footer/>
    </div>
);



export default TodoApp;