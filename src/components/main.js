import React, { Component } from "react";
import { Switch, Route, Link, withRouter } from "react-router-dom";
import { Typography, Grow } from "@material-ui/core";

//Pages
import MainScreen from "../screens/MainScreen/MainScreen";
import Resume from "../screens/Resume/Resume";
import Projects from "../screens/Projects/Projects";
import Experiences from "../screens/Experiences/Experiences";
import Skills from "../screens/Skills/Skills";
import Education from "../screens/Education/Education";
import Network from "../screens/Network/Network";
import SideNavs from "./SideNavs/SideNavs";

import ImageAvatars from "./ImageAvatars/ImageAvatars";
import ProfileImage from "../static/images/profile.jpg";
import Data from "../static/data/data.json";

withRouter(props => <Main {...props} />);
const styles = {
  bigAvatar: {
    margin: 10,
    width: 260,
    height: 260
  }
};

const profileName = Data.profile[0].name;

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
    ],
    transition: true
  };

  handleAvatar = () => {
    if (this.props.location.pathname !== "/") {
      return (
        <Grow
          in={this.state.transition}
          style={{ transformOrigin: "0 0 0" }}
          {...(this.state.transition ? { timeout: 800 } : {})}
        >
          <div className="avatar">
            <ImageAvatars Src={ProfileImage} />
            <Typography
              gutterBottom
              align="center"
              color="inherit"
              style={{ border: "2px solid white" }}
            >
              {profileName}
            </Typography>
          </div>
        </Grow>
      );
    } else {
      return (
        <Grow
          in={this.state.transition}
          style={{ transformOrigin: "0 0 0" }}
          {...(this.state.transition ? { timeout: 800 } : {})}
        >
          <div>
            <ImageAvatars Src={ProfileImage} AvatarClass={styles.bigAvatar} />
            <Typography
              variant="h3"
              gutterBottom
              align="center"
              color="inherit"
            >
              {profileName}
            </Typography>
          </div>
        </Grow>
      );
    }
  };

  render() {
    return (
      <div>
        {this.handleAvatar()}
        <div className="menu_btn">
          <SideNavs NavItems={this.state.navItems} Component={Link} />
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
