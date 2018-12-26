import React from 'react';

const AddTodo = () => (
    <header className="header">
        <h1>待办事项！</h1>
        <input className="new-todo" type="text" placeholder="接下来做什么？" autoFocus/>
    </header>
);

export default AddTodo;