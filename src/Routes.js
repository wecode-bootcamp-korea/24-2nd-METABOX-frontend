import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import MoviePost from './pages/MoviePost/MoviePost';
import Details from './pages/Details/Details';
import Booking from './pages/Booking/Booking';
import MoviePostWrite from './pages/MoviePostWrite/MoviePostWrite';

function Routes() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/moviepost" component={MoviePost} />
        <Route exact path="/moviepost/write" component={MoviePostWrite} />
        <Route exact path="/details" component={Details} />
        <Route exact path="/booking" component={Booking} />
      </Switch>
    </Router>
  );
}

export default Routes;
