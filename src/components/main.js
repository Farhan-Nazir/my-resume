import React, { Component } from "react";
import { Switch, Route, Link, withRouter } from "react-router-dom";

//Pages
import MainScreen from "../screens/MainScreen/MainScreen";
import Resume from "../screens/Resume/Resume";
import Projects from "../screens/Projects/Projects";
import Experiences from "../screens/Experiences/Experiences";
import Skills from "../screens/Skills/Skills";
import Education from "../screens/Education/Education";
import Network from "../screens/Network/Network";
import SideNavs from "./SideNavs/SideNavs";

import Avatar from "./Avatar/Avatar";
import Miss from "../static/images/missExample.jpg";
import { Typography } from "@material-ui/core";

withRouter(props => <Main {...props} />);
const styles = {
  bigAvatar: {
    margin: 10,
    width: 260,
    height: 260
  }
};

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

  handleAvatar = () => {
    if (this.props.location.pathname !== "/") {
      return (
        <div className="avatar">
          <Avatar Src={Miss} />
          <Typography gutterBottom align="center" color="inherit">
            {"Emma Jones"}
          </Typography>
        </div>
      );
    } else {
      return (
        <div>
          <Avatar Src={Miss} AvatarClass={styles.bigAvatar} />
          <Typography variant="h3" gutterBottom align="center" color="inherit">
            {"Emma Jones"}
          </Typography>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        {this.handleAvatar()}
        <div className="menu_btn">
          <SideNavs
            NavItems={this.state.navItems}
            ButtonName={"My Resume"}
            Component={Link}
          />
        </div>

        <Switch>
          <Route exact path="/" component={MainScreen} />
          <Route path="/resume" component={Resume} />
          <Route path="/projects" component={Projects} />
          <Route path="/experiences" component={Experiences} />
          <Route path="/skills" component={Skills} />
          <Route path="/education" component={Education} />
          <Route path="/network" component={Network} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Main);
