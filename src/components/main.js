import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainScreen from '../screens/MainScreen'
import Resume from '../screens/Resume'


const Main = () => (
  <Switch>
    <Route exact path="/" component={MainScreen} />
    <Route path="/resume" component={Resume} />
  </Switch>
)

export default Main;