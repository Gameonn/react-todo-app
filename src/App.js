import React, { Component, Suspense } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from './Header/Header';
import Todos from './Todos/Todos';
const NewTodo = React.lazy(() => import('./NewTodo/NewTodo'));

class App extends Component {

    render() {
      return (
          <div className="App">
            <Header />
            <Switch>
              <Route path="/todos/new" render={() => (
                  <Suspense fallback={<div>Loading...</div>}><NewTodo /></Suspense>
              )} />
              <Route path="/todos" component={Todos} />
              <Redirect from="/" to="/todos" />
              <Route render={() => <h1>Not Found</h1>} />
            </Switch>
          </div>
      );
    };

}

export default App;
