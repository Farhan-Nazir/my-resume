import React, { Component } from "react";
import Grow from "@material-ui/core/Grow";
import { FaArrowRight } from "react-icons/fa";
import "./Education.css";
import Data from "../../static/data/data.json";
//import PaperSheet from "../../components/PaperSheet/PaperSheet";
import RightArrow from "../../components/RightArrow/RightArrow";
import { Paper, Typography } from "@material-ui/core";
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
                    <Paper key={i} elevation={20}>
                      <Typography
                        align={"center"}
                        variant={"h6"}
                        component={"h5"}
                      >
                        {e.school}
                      </Typography>
                      <Typography>{e.title}</Typography>
                      <Typography>{e.description}</Typography>
                      <Typography>{e.startDate}</Typography>
                      <Typography>{e.endDate}</Typography>
                    </Paper>
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
                      <Typography
                        align={"center"}
                        variant={"h6"}
                        component={"h5"}
                      >
                        {e.school}
                      </Typography>
                      <Typography>{e.title}</Typography>
                      <Typography>{e.description}</Typography>
                      <Typography>{e.startDate}</Typography>
                      <Typography>{e.endDate}</Typography>
                    </Paper>
                  );
                })}
              </Paper>
            </div>
          </Grow>
        </div>
        <RightArrow />
      </div>
    );
  }
}

export default Education;
