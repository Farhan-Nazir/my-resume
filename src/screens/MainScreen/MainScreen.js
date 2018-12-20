import React, { Component } from "react";
import { Typography, Grow } from "@material-ui/core";
import "./style.css";
import Icons from "../../components/NetworkIcons/NetworkIcons";
import Data from "../../static/data/data.json";

class MainScreen extends Component {
  state = {
    transition: true
  };
  render() {
    const { transition } = this.state;
    return (
      <div className="container">
        <Grow
          in={transition}
          style={{ transformOrigin: "0 0 0" }}
          {...(transition ? { timeout: 800 } : {})}
        >
          <div className="avatarTitle">
            <Typography
              variant="h6"
              gutterBottom
              align="center"
              color="inherit"
            >
              {Data.profile[0].title} <br />
              <Icons />
            </Typography>
          </div>
        </Grow>
      </div>
    );
  }
}

export default MainScreen;
