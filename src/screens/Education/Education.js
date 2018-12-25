import React, { Component } from "react";
import Grow from "@material-ui/core/Grow";
import { FaArrowRight } from "react-icons/fa";
import "./Education.css";
import Data from "../../static/data/data.json";
import PaperSheet from "../../components/PaperSheet/PaperSheet";
import RightArrow from "../../components/RightArrow/RightArrow"

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
              <h1> Education </h1>
              {this.state.educations.map(e => {
                return (
                  <ul style={{ listStyle: "none" }}>
                    <li>
                      <PaperSheet
                        key={e.id}
                        uni={e.school}
                        degree={e.title}
                        description={e.description}
                        startDate={e.startDate}
                        endDate={e.endDate}
                      />
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
              <h1> Other Qualifications </h1>
              {this.state.otherQualifications.map(e => {
                return (
                  <ul className="" style={{ listStyle: "none" }}>
                    <li>
                      <PaperSheet
                        key={e.id}
                        uni={e.school}
                        degree={e.title}
                        description={e.description}
                        startDate={e.startDate}
                        endDate={e.endDate}
                      />
                    </li>
                  </ul>
                );
              })}
            </div>
          </Grow>
        </div>
        <RightArrow/>
      </div>
    );
  }
}

export default Education;
