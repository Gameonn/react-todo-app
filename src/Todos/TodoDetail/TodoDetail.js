import React, { useEffect, useState } from 'react';

const TodoDetail = (props) => {

    const [selectedTodo, setSelectedTodo] = useState([]);

    useEffect( () => {
        let todo = null;
        const id = props.match.params.id;
        console.log(id);
        let newTodos = JSON.parse(localStorage.getItem("todosArray"));
        for (let i = 0; i < newTodos.length; i++) {
            if (i === id) {
              todo = newTodos[i];
              break;
            }
        }
        setSelectedTodo({todo});
    }, []);

    return (
            <div>
                <h1>{selectedTodo.title}</h1>
                <p>{selectedTodo.description}</p>
                <p>{selectedTodo.deadline}</p>
            </div>
    );
}

export default TodoDetail;