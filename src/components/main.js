import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainScreen from '../screens/MainScreen/MainScreen'
import Resume from '../screens/Resume/Resume';
import Projects from '../screens/Projects/Projects';
import Experiences from '../screens/Experiences/Experiences';
import Skills from '../screens/Skills/Skills';
import Education from '../screens/Education/Education';
import Network from '../screens/Network/Network';


const Main = () => (
  <Switch>
    <Route exact path="/" component={MainScreen} />
    <Route path="/resume" component={Resume} />
    <Route path="/projects" component={Projects} />
    <Route path="/experiences" component={Experiences} />

  </Switch>
)

export default Main;