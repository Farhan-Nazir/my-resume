import React, { Component } from "react";
import "./TimeLine.css";
import { Paper, Typography } from "@material-ui/core";

class TimeLine extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <ul>
          <li>
            <span />
            <div className="propsContainer">
              <Typography>{this.props.title}</Typography>
              <Typography>{this.props.school}</Typography>
              <Typography>{this.props.description}</Typography>
            </div>
            <span className="number">
              <span>{this.props.startDate}</span>
              <span>{this.props.endDate}</span>
            </span>
          </li>
        </ul>
      </div>
    );
  }
}

export default TimeLine;
