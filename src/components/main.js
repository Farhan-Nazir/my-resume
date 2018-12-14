import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";

import MainScreen from "../screens/MainScreen/MainScreen";
import Resume from "../screens/Resume/Resume";
import Projects from "../screens/Projects/Projects";
import Experiences from "../screens/Experiences/Experiences";
import Skills from "../screens/Skills/Skills";
import Education from "../screens/Education/Education";
import Network from "../screens/Network/Network";
import SideNavs from "./SideNavs/SideNavs";

class Main extends Component {
  state = {
    navItems: [
      {
        id: 1,
        name: "Main Screen",
        link: "/"
      },
      {
        id: 2,
        name: "My Resume",
        link: "/resume"
      },
      {
        id: 3,
        name: "Education",
        link: "/education"
      },
      {
        id: 4,
        name: "Projects",
        link: "/projects"
      },
      {
        id: 5,
        name: "Skills",
        link: "/skills"
      },
      {
        id: 6,
        name: "My Network",
        link: "/network"
      },
      {
        id: 7,
        name: "Experiences",
        link: "/experiences"
      }
    ]
  };
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={MainScreen} />
          <Route path="/resume" component={Resume} />
          <Route path="/projects" component={Projects} />
          <Route path="/experiences" component={Experiences} />
          <Route path="/skills" component={Skills} />
          <Route path="/education" component={Education} />
          <Route path="/network" component={Network} />
        </Switch>
        <SideNavs
          NavItems={this.state.navItems}
          ButtonName={"Menu"}
          Component={Link}
        />
      </div>
    );
  }
}

export default Main;
