import React, { Component } from "react";
import Grow from "@material-ui/core/Grow";
import "./Experience.css";
import Data from "../../static/data/data.json";
import { Paper, Typography } from "@material-ui/core";
import TimeLine from "../../components/TimeLine/TimeLine";

class Experiences extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transition: true,
      experiences: []
    };
  }
  componentWillMount() {
    this.setState({ experiences: [...Data.Experiences] });
  }

  render() {
    const { transition } = this.state;
    return (
      <div>
        <Grow
          in={transition}
          style={{ transformOrigin: "0 0 0" }}
          {...(transition ? { timeout: 800 } : {})}
        >
          <div className="experiencesDiv">
            <Paper style={{ padding: 10 }}>
              <Typography
                align={"center"}
                gutterBottom
                variant={"display2"}
                component={"h5"}
              >
                Experience
              </Typography>
              {this.state.experiences.map((e, i) => {
                return (
                  <TimeLine
                    key={i}
                    Title={e.title}
                    Organization={e.companyName}
                    Description={e.description}
                    startDate={e.startDate}
                    endDate={e.endDate}
                  />
                );
              })}
            </Paper>
          </div>
        </Grow>
      </div>
    );
  }
}

export default Experiences;
