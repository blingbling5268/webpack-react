import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../src/login';
import Home from '../src/Home';

const AppRouter = () => (
  <Router>
    <main>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/home' exact component={Home} />
      </Switch>
    </main>
  </Router>
);

export default AppRouter;
