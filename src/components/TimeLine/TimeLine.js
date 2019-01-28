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
              <Typography
                variant={"h5"}
                component={"h5"}
                style={{
                  padding: "1em 0 0.1em 0",
                  color: "#243b55",
                  fontWeight: "700"
                }}
              >
                {this.props.Title}
              </Typography>
              <Typography
                variant={"h6"}
                component={"h6"}
                style={{
                  padding: "0.1em 0 0.25em 0",
                  color: "darkred",
                  fontWeight: "500"
                }}
              >
                {this.props.Organization}
              </Typography>
              <Typography
                variant={"subheading"}
                style={{
                  padding: "0.25em 0 0.25em 0"
                }}
              >
                {this.props.Description}
              </Typography>
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
