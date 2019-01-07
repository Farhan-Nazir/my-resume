import React, { Component } from "react";
import { Timeline, Event } from "react-timeline-scribble";
import { Typography } from "@material-ui/core";

class TLine extends Component {
  state = {};
  render() {
    return (
      <div style={{ color: "black", padding: 10, textAlign: "left" }}>
        <Timeline>
          <Event interval={this.props.startDate}>
            <Typography>{this.props.title}</Typography>
            <Typography>{this.props.school}</Typography>
            <Typography>{this.props.description}</Typography>
          </Event>
        </Timeline>
      </div>
    );
  }
}

export default TLine;
