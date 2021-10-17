import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from '../pages/home';
import Series from '../pages/series';
import Movie from '../pages/movie';

const Routes = () =>
  <Switch>
    <Route exact path="/">
      <Home/>
    </Route>
    <Route path="/series">
      <Series/>
    </Route>
    <Route path="/movie">
      <Movie/>
    </Route>
  </Switch>

export default Routes;