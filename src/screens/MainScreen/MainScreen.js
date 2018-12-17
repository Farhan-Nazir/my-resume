import React, { Component } from "react";

import { Typography } from "@material-ui/core";
import "./style.css";

import Icons from "../../components/NetworkIcons/NetworkIcons";

class MainScreen extends Component {
  render() {
    return (
      <div className="container">
        <div className="avatarTitle">
          <Typography variant="h6" gutterBottom align="center" color="inherit">
            I'm Full-Stack Web Developer <br />
            <Icons />
          </Typography>
        </div>
      </div>
    );
  }
}

export default MainScreen;
