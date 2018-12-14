import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./style.css";
import Avatar from "../../components/Avatar/Avatar";
import Bilal from "../../static/images/bilal.jpg";
import SideNavs from "../../components/Menu/SideNavs";

class MainScreen extends Component {
  state = {
    navItems: [
      {
        id: 1,
        name: "My Resume",
        link: <Link to="/resume" />
      },
      {
        id: 2,
        name: "Education",
        link: <Link to="/education" />
      }
    ]
  };

  /* ,
      "Education",
      "Projects",
      "Skills",
      "My Network",
      "My Interests" */
  navLink = () => console.log("Mainscreen clicking !!!");

  render() {
    return (
      <div className="container">
        <SideNavs NavItems={this.state.navItems} ButtonName={"Menu"} />
        <div className="avatar">
          <Avatar Class="avatarName" Title={"Bilal Nazir"} Src={Bilal} />
        </div>
        <div className="menu">
          <Link to="/resume">Resume</Link>
        </div>
      </div>
    );
  }
}

MainScreen.propTypes = {};

export default MainScreen;
