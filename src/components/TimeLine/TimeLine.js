import React, { Component } from "react";
import "./TimeLine.css";
import { Paper, Typography } from "@material-ui/core";

class TimeLine extends Component {
  state = {};
  render() {
    return (
      <div className="timeLine">
        <ul>
          <li>
            <span />
            <div className="propsContainer">
              <Typography variant={"h6"} component={"h6"}>
                {this.props.Title}
              </Typography>
              <Typography>{this.props.Organization}</Typography>
              <Typography>{this.props.Description}</Typography>
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
