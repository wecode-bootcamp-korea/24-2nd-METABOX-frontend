import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import MoviePost from './pages/MoviePost/MoviePost';
import Details from './pages/Details/Details';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/moviepost" component={MoviePost} />
        <Route exact path="/details" component={Details} />
      </Switch>
    </Router>
  );
}

export default Routes;
