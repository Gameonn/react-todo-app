import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import { Route } from 'react-router-dom';

import Todo from './Todo/Todo';
import TodoDetail from './TodoDetail/TodoDetail';

class Todos extends Component {

    state = {
        todos: []
    }

    componentDidMount() {
        const newTodos = localStorage.getItem('todosArray');
        if(newTodos) {
            this.setState({todos: JSON.parse(newTodos)});
        }
    }

    deleteTodoHandler = (id) => {
        let updatedTodos = JSON.parse(localStorage.getItem("todosArray"));
        updatedTodos.splice(id, 1);
        this.setState({todos: updatedTodos});
        localStorage.setItem("todosArray", JSON.stringify(updatedTodos));
    }

    markAsComplete = (title) => {
        let newTodos = JSON.parse(localStorage.getItem("todosArray"));
        for (let i = 0; i < newTodos.length; i++) {
            if (newTodos[i]['title'] === title) {
              newTodos[i].done = true;
              break;
            }
          }

        this.setState({todos: newTodos});
        localStorage.setItem("todosArray", JSON.stringify(newTodos));
    }

    selectTodoHandler = (id) => {
        this.props.history.push('/todos/' + id);
    }

    render() {

        let todos = <h3>No Todos</h3>;
        if(this.state.todos.length) {
            todos = this.state.todos.map((todo, index) => {
                        return <Todo key={index} title={todo.title} delete={() => this.deleteTodoHandler(index)}
                                complete={() => this.markAsComplete(todo.title)}
                                selectTodo={() => this.selectTodoHandler(index)} done={todo.done} />;
                        }
                    )
        }

        return (
            <Container maxWidth="sm" style={{border: '1px solid', background: '#d8cbb9b8'}}>
                <List component="nav" aria-label="main">
                    {todos}
                </List>
                <Route path={this.props.match.url + "/:id"} exact component={TodoDetail} />
            </Container>
        );
    }
}

export default Todos;
