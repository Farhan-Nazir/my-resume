import React, { Component } from "react";
import Grow from "@material-ui/core/Grow";
import "./Education.css";
import Data from "../../static/data/data.json";
import { Paper, Typography } from "@material-ui/core";
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
    this.setState({
      otherQualifications: [...Data.OtherQualifications]
    });
  }

  render() {
    const { transition } = this.state;
    return (
      <div>
        <div
          className="eduMain"
          style={{
            textAlign: "center",
            display: "flex",
            msFlexDirection: "row",
            justifyContent: "center"
          }}
        >
          <Grow
            in={transition}
            style={{ transformOrigin: "0 0 0" }}
            {...(transition ? { timeout: 800 } : {})}
          >
            <div
              className="edu eduLeft"
              style={{
                margin: "5em 2em 0 2em",
                width: "35%"
              }}
            >
              <Paper>
                <Typography
                  align={"center"}
                  gutterBottom
                  variant={"display1"}
                  component={"h5"}
                  style={{
                    padding: "1em 0 0.5em 0",
                    fontWeight: "700"
                  }}
                >
                  Education
                </Typography>

                {this.state.educations.map((e, i) => {
                  return (
                    <TimeLine
                      key={i}
                      elevation={20}
                      Title={e.title}
                      Organization={e.school}
                      Description={e.description}
                      startDate={e.startDate}
                      endDate={e.endDate}
                    />
                  );
                })}
              </Paper>
            </div>
          </Grow>

          <Grow
            in={transition}
            style={{ transformOrigin: "0 0 0" }}
            {...(transition ? { timeout: 1600 } : {})}
          >
            <div
              className="edu eduRight"
              style={{
                margin: "5em 2em 0 2em",
                width: "35%"
              }}
            >
              <Paper>
                <Typography
                  align={"center"}
                  gutterBottom
                  variant={"display1"}
                  component={"h5"}
                  style={{
                    padding: "1em 0 0.5em 0",
                    // color: "#243b55",
                    fontWeight: "700"
                  }}
                >
                  Qualifications
                </Typography>

                {this.state.otherQualifications.map(
                  (e, i) => {
                    return (
                      <TimeLine
                        key={i}
                        Title={e.title}
                        Organization={e.school}
                        Description={e.description}
                        startDate={e.startDate}
                        endDate={e.endDate}
                      />
                    );
                  }
                )}
              </Paper>
            </div>
          </Grow>
        </div>
      </div>
    );
  }
}

export default Education;
