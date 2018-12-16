import React, { Component } from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";
import "./style.css";
import Avatar from "../../components/Avatar/Avatar";
import Miss from "../../static/images/missExample.jpg";
import Icons from "../../components/NetworkIcons/NetworkIcons";

const styles = {
  bigAvatar: {
    margin: 10,
    width: 260,
    height: 260
  }
};

class MainScreen extends Component {
  componentWillMount() {
    this.MainText = "Emma Jones";
  }
  render() {
    return (
      <div className="container">
        <div className="avatar">
          <Avatar
            /* the className prop does not work, apply, or affect the Avatar componenet
              Therefore, we can remove it.
             * You can test it by changing the .avatarName in the CSS
            */
            className="avatarName"
            Src={Miss}
            AvatarClass={styles.bigAvatar}
          />
          <Typography variant="h3" gutterBottom align="center">
            {this.MainText}
          </Typography>
          <Typography variant="h6" gutterBottom align="center">
            I'm Full-Stack Web Developer <br />
            <Icons />
          </Typography>
        </div>
      </div>
    );
  }
}

MainScreen.propTypes = {};

export default MainScreen;
