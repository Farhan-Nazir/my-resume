import React, { Component } from "react";
import Grow from "@material-ui/core/Grow";
import "./Education.css";
import Data from "../../static/data/data.json";
import { Paper, Typography } from "@material-ui/core";
import TLine from "../../components/TLine/TLine";
import TimeLine from "../../components/TimeLine/TimeLine";

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
              <Paper>
                <Typography gutterBottom variant={"h5"} component="h1">
                  Education
                </Typography>

                {this.state.educations.map((e, i) => {
                  return (
                    <div>
                      <Paper key={i} elevation={20}>
                        <TimeLine
                          title={e.title}
                          school={e.school}
                          description={e.description}
                          startDate={e.startDate}
                          endDate={e.endDate}
                        />
                      </Paper>
                    </div>
                  );
                })}
              </Paper>
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
              <Paper>
                <Typography gutterBottom variant={"h5"} component="h1">
                  Other Qualifications
                </Typography>

                {this.state.otherQualifications.map((e, i) => {
                  return (
                    <Paper key={i} elevation={20}>
                      <TimeLine
                        title={e.title}
                        school={e.school}
                        description={e.description}
                        startDate={e.startDate}
                        endDate={e.endDate}
                      />
                    </Paper>
                  );
                })}
              </Paper>
            </div>
          </Grow>
        </div>
      </div>
    );
  }
}

export default Education;
