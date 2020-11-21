import React from 'react';
import { NavLink } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const nav = (props) => {
    return (
            <div>
              <List>
                <ListItem>
                  <NavLink to='/todos' exact activeClassName="my-active" activeStyle={{color: '#ba4848', textDecoration: 'underline'}}>Todos</NavLink>
                </ListItem>
                <ListItem>
                  <NavLink to='/todos/new'>New Todo</NavLink>
                </ListItem>
              </List>
            </div>
    );
}

export default nav;
