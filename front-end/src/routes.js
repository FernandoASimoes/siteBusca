import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import About from  './Pages/About';
import Signin from  './Pages/Signin';
import Signup from  './Pages/Signup';
import NotFound from  './Pages/NotFound';

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/signin" component={Signin} />
      <Route exact path="/signup" component={Signup} />
      <Route component={NotFound}/>
    </Switch>
  );
}