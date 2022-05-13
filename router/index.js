import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../src/login';
import Home from '../src/Home';

const AppRouter = () => (
  <Router>
    <main>
      <Switch>
        <Route path='/main' component={Home} />
        <Route path='/' exact component={Login} />
      </Switch>
    </main>
  </Router>
);

export default AppRouter;
