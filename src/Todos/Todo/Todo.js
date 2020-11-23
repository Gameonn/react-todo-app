import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import FolderIcon from '@material-ui/icons/Folder';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import { green, red, grey } from '@material-ui/core/colors';

const Todo = (props) => {

    const doneStyle = {
        textDecoration: 'line-through'
    }

    let titleEl = <ListItemText primary={props.title} onClick={props.selectTodo}
                            style={props.done ? doneStyle : null} />;
    let taskCompleteColor = green[500];
    if(props.done) {
        // titleEl = <s> {titleEl} </s>;
        taskCompleteColor = grey[500];
    }


    return (
        <ListItem button>
            <ListItemIcon> <FolderIcon /> </ListItemIcon>
            {titleEl}
            <button onClick={props.complete}>
                <CheckCircleIcon style={{ color: taskCompleteColor }} fontSize="small" />
            </button>
            <button onClick={props.delete}>
                <DeleteIcon style={{ color: red[400] }} fontSize="small" />
            </button>
        </ListItem>
    );
}

export default Todo;
