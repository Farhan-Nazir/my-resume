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
      <div className="eduMain">
        <div className="edu eduLeft">
          <h2> Education </h2>
          {this.state.educations.map(e => {
            return (
              <ul style={{ listStyle: "none" }}>
                <li key={e.id}>
                  <div>
                    University: {e.school}
                    <br />
                    Degree: {e.title}
                    <br />
                    Description: {e.description}
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

        <div className="edu eduRight">
          <h2> Other Qualifications </h2>
          {this.state.educations.map(e => {
            return (
              <ul className="" style={{ listStyle: "none" }}>
                <li key={e.id}>
                  <div>
                    University: {e.school}
                    <br />
                    Degree: {e.title}
                    <br />
                    Description: {e.description}
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
      </div>
    );
  }
}

export default Education;
