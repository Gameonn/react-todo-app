import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import FolderIcon from '@material-ui/icons/Folder';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import { green, red } from '@material-ui/core/colors';

const Todo = (props) => {

    let titleEl = <ListItemText primary={props.title} />;
    if(props.done)
        titleEl = <s> {titleEl} </s>

    return (
        <ListItem button>
            <ListItemIcon> <FolderIcon /> </ListItemIcon>
            {titleEl}
            <button onClick={props.complete}>
                <CheckCircleIcon style={{ color: green[500] }} fontSize="small" />
            </button>
            <button onClick={props.delete}>
                <DeleteIcon style={{ color: red[200] }} fontSize="small" />
            </button>
        </ListItem>
    );
}

export default Todo;
