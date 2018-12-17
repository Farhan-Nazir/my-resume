import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import "./style.css";
import Icons from "../../components/NetworkIcons/NetworkIcons";
import Data from "../../static/data/data.json";

class MainScreen extends Component {
  render() {
    return (
      <div className="container">
        <div className="avatarTitle">
          <Typography variant="h6" gutterBottom align="center" color="inherit">
            {Data.profile[0].title} <br />
            <Icons />
          </Typography>
        </div>
      </div>
    );
  }
}

export default MainScreen;
