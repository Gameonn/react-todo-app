import React from 'react';
import { NavLink } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';

import styles from './Nav.module.css';

const nav = (props) => {
    return (
            <div className={styles.Nav}>
                <Paper elevation={3} className={styles.MenuItem}>
                  <NavLink to='/todos' exact activeStyle={{ color:'red', fontWeight: '700' }}>Todos</NavLink>
                </Paper>
                <Paper elevation={3} className={styles.MenuItem}>
                  <NavLink to='/todos/new' activeStyle={{ color:'red', fontWeight: '700' }}>New Todo</NavLink>
                </Paper>
            </div>
    );
}

export default nav;
