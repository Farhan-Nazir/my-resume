import React, { Component } from "react";
import Grow from "@material-ui/core/Grow";
import "./Education.css";
import Data from "../../static/data/data.json";


class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transition: true,
      educations: [],
      otherQualifications: []
    };
  }

  componentWillMount() {
    this.setState({ educations: [...Data.Education] });
    this.setState({ otherQualifications: [...Data.OtherQualifications] });
  }

  render() {
    const { transition } = this.state;
    return (
      <div>
        <div className="eduMain">
          <Grow
            in={transition}
            style={{ transformOrigin: "0 0 0" }}
            {...(transition ? { timeout: 800 } : {})}
          >
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
          </Grow>
          <Grow
            in={transition}
            style={{ transformOrigin: "0 0 0" }}
            {...(transition ? { timeout: 1200 } : {})}
          >
            <div className="sexy_line" />
          </Grow>

          <Grow
            in={transition}
            style={{ transformOrigin: "0 0 0" }}
            {...(transition ? { timeout: 1600 } : {})}
          >
            <div className="edu eduRight">
              <h2> Other Qualifications </h2>
              {this.state.otherQualifications.map(e => {
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
          </Grow>
        </div>
      </div>
    );
  }
}

export default Education;
