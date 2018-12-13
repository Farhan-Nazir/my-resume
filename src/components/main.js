import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainScreen from '../screens/MainScreen'
import Resume from '../screens/Resume';
import Projects from '../screens/Projects';
import Experiences from '../screens/Experiences';
import Skills from '../screens/Skills';
import Education from '../screens/Education';
import Network from '../screens/Network';


const Main = () => (
  <Switch>
    <Route exact path="/" component={MainScreen} />
    <Route path="/resume" component={Resume} />
    <Route path="/projects" component={Projects} />

  </Switch>
)

export default Main;