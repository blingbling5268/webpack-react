import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import First from '../src/First';

const ContentMain = () => {
  <Router>
    <Switch>
      <Route exact path='/first' component={First} />
    </Switch>
  </Router>;
};

export default ContentMain;
