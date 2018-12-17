import React, { Component } from "react";
import "./Education.css";
import Data from "../../static/data/data.json";

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      educations: []
    };
  }

  componentWillMount() {
    this.setState({ educations: [...Data.Education] });
  }
  

  render() {
    return (
      <div>
        My Education
        {this.state.educations.map(e => {
          return (
          <li key={e.id}>{e.title} | {e.Description}</li>);
        })}
      </div>
    );
  }
}

export default Education;
