import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./style.css";
import Avatar from "../../components/Avatar/Avatar";
import Bilal from "../../static/images/bilal.jpg";

class MainScreen extends Component {
  render() {
    return (
      <div className="container">
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
