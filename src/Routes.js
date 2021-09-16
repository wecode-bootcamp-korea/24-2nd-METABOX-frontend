import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import MoviePost from './pages/MoviePost/MoviePost';
import Details from './pages/Details/Details';
import Booking from './pages/Booking/Booking';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/moviepost" component={MoviePost} />
        <Route exact path="/details" component={Details} />
        <Route exact path="/booking" component={Booking} />
      </Switch>
    </Router>
  );
}

export default Routes;
