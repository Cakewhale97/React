import React, { useState } from 'react';
import "../styles/modules/AddTodo.css";
import "../styles/modules/Todo.css";

export default function AddTodo({ addTodo }) {
    const [todo, setTodo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo.trim() !== '') {
            addTodo(todo);
            setTodo('');
        }
    };

    return (
        <form className='Form' onSubmit={handleSubmit}>
            <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
            <button type="submit">Add Todo</button>
        </form>
    );

}



