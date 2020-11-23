import React, { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const TodoDetail = (props) => {

    const [selectedTodo, setSelectedTodo] = useState([]);

    useEffect( () => {
        let newTodo = [];
        const id = parseInt(props.match.params.id);
        let allTodos = JSON.parse(localStorage.getItem("todosArray"));
        for (let i = 0; i < allTodos.length; i++) {
            if (i === id) {
              newTodo.title = allTodos[i]['title'];
              newTodo.deadline = allTodos[i]['deadline'];
              newTodo.description = allTodos[i]['description'];
              break;
            }
        }
        setSelectedTodo(newTodo);
    }, [props.match.params.id]);

    return (
            <Card style={{width: 275, margin: '20px auto', backgroundColor: '#2196F3'}} variant="outlined">
                <CardContent>
                    <Typography variant="h4" component="h2"> {selectedTodo.title} </Typography>
                    <Divider />
                    <Typography variant="body2" component="p"> {selectedTodo.description} </Typography>
                    <Typography color="textSecondary">{selectedTodo.deadline}</Typography>
                </CardContent>
            </Card>
    );
}

export default TodoDetail;