import React, {useState} from 'react';
import { Redirect } from 'react-router-dom';

import styles from './NewTodo.module.css';

const NewTodo = (props) => {

    const [title, setTitle] = useState('');
    const [deadline, setDeadline] = useState('');
    const [description, setDescription] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const addTodoHandler = (e) => {
        e.preventDefault();
        let oldTodos = JSON.parse(localStorage.getItem('todosArray')) || [];
        let newTodo = { 'title': title, 'deadline': deadline, 'description': description, 'done': false };
        oldTodos.push(newTodo);
        localStorage.setItem('todosArray', JSON.stringify(oldTodos));
        setSubmitted(true);
    }

    return (
        <div className={styles.NewTodo}>
            {submitted ? <Redirect to="/todos" /> : null }
            <h1>Add a Todo</h1>
            <form onSubmit={addTodoHandler}>
                <label>Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required/>
                <label>Deadline</label>
                <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} placeholder="Deadline" required/>
                <label>Description</label>
                <textarea rows="4" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required/>
                <button type="submit"> Save </button>
            </form>
        </div>
    );
}

export default NewTodo;

