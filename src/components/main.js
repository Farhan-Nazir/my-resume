import React, { Component } from "react";
import {
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import { Typography, Grow } from "@material-ui/core";
import {
  FaArrowCircleRight,
  FaArrowCircleLeft
} from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";

//Pages
import MainScreen from "../screens/MainScreen/MainScreen";
import Resume from "../screens/Resume/Resume";
import Projects from "../screens/Projects/Projects";
import Experiences from "../screens/Experiences/Experiences";
import Skills from "../screens/Skills/Skills";
import Education from "../screens/Education/Education";
import MyGithub from "../screens/MyGithub/MyGithub";
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
      // {
      //   id: 2,
      //   name: "My Resume",
      //   link: "/resume"
      // },
      {
        id: 2,
        name: "Education",
        link: "/education"
      },
      {
        id: 3,
        name: "Projects",
        link: "/projects"
      },
      {
        id: 4,
        name: "Skills",
        link: "/skills"
      },
      {
        id: 5,
        name: "My Github",
        link: "/myGithub"
      },
      {
        id: 6,
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
          {...(this.state.transition
            ? { timeout: 800 }
            : {})}
        >
          <div className="top">
            <div className="loggedAs">
              <div className="loggedAsuserName">
                <Typography
                  gutterBottom
                  align="center"
                  style={{
                    color: "#141e30",
                    fontWeight: "bold"
                  }}
                >
                  {profileName}
                </Typography>{" "}
              </div>
              <div className="loggedAsavatar">
                <ImageAvatars Src={ProfileImage} />
              </div>
            </div>
          </div>
        </Grow>
      );
    } else {
      return (
        <Grow
          in={this.state.transition}
          style={{ transformOrigin: "0 0 0" }}
          {...(this.state.transition
            ? { timeout: 800 }
            : {})}
        >
          <div>
            <div className="top">
              <div className="loggedAs">
                <div className="loggedAsuserName">
                  <Typography
                    gutterBottom
                    align="center"
                    style={{
                      color: "#141e30",
                      fontWeight: "bold"
                    }}
                  >
                    {profileName}
                  </Typography>{" "}
                </div>
                <div className="loggedAsavatar">
                  <ImageAvatars Src={ProfileImage} />
                </div>
              </div>
            </div>
            <ImageAvatars
              Src={ProfileImage}
              AvatarClass={styles.bigAvatar}
            />
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

  handlePerviousButton() {
    const { navItems } = this.state;
    let pageIndex = navItems.findIndex(
      e => e.link === this.props.location.pathname
    );
    if (pageIndex >= 1 && pageIndex <= 5) {
      return (
        <div
          className="previousButton"
          style={{
            position: "absolute",
            top: "70%"
          }}
        >
          <Link to={navItems[pageIndex - 1].link}>
            <FaArrowCircleLeft
              style={{
                width: 40,
                height: 40,
                color: "white"
              }}
            />
          </Link>
        </div>
      );
    }
  }

  handleNextButton() {
    const { navItems } = this.state;
    let pageIndex = navItems.findIndex(
      e => e.link === this.props.location.pathname
    );
    if (pageIndex >= 1 && pageIndex <= 4) {
      return (
        <div
          className="nextButton"
          style={{
            position: "absolute",
            left: "95%",
            top: "70%"
          }}
        >
          <Link to={navItems[pageIndex + 1].link}>
            <FaArrowCircleRight
              style={{
                width: 40,
                height: 40,
                color: "white"
              }}
            />
          </Link>
        </div>
      );
    }
  }

  render() {
    // console.log(this.props.location);
    return (
      <div>
        <div>
          {this.handleAvatar()}
          <div
            className="menu_btn"
            style={{
              position: "absolute",
              left: "5%",
              top: " 12px"
            }}
          >
            <SideNavs
              NavItems={this.state.navItems}
              Component={Link}
            />
          </div>
        </div>

        {this.handlePerviousButton()}
        {this.handleNextButton()}

        <Switch>
          <Route exact path="/" component={MainScreen} />
          <Route path="/projects" component={Projects} />
          <Route
            path="/experiences"
            component={Experiences}
          />
          <Route path="/skills" component={Skills} />
          <Route path="/education" component={Education} />
          <Route path="/mygithub" component={MyGithub} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Main);
