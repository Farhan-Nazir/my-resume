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
      <div style={{ marginLeft: 50 }}>
        My Education
        {this.state.educations.map(e => {
          return (
            <ul style={{ marginLeft: 50, listStyle: "none" }}>
              <li key={e.id}>
                <div>
                  Course: {e.title}
                  <br />
                  Description: {e.Description}
                  <br />
                  Start Date: {e.startDate}
                  <br />
                  End Date: {e.endDate}
                  <br />
                </div>
              </li>
            </ul>
          );
        })}
      </div>
    );
  }
}

export default Education;
