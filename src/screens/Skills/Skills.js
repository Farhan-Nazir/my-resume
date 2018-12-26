import React, { Component } from "react";
import Grow from "@material-ui/core/Grow";
import "./Skills.css";
import Data from "../../static/data/data.json";
import { Paper, Typography } from "@material-ui/core";

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transition: true,
      skills: []
    };
  }

  componentWillMount() {
    this.setState({ skills: [...Data.Skills] });
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
          <div className="skillsDiv">
            <Paper>
              <Typography
                align={"center"}
                gutterBottom
                variant={"display2"}
                component={"h5"}
              >
                Skills
              </Typography>
              {this.state.skills.map((e, i) => {
                return (
                  <Paper key={i} elevation={20}>
                    <Typography
                      align={"center"}
                      variant={"h6"}
                      component={"h5"}
                    >
                      {e.skillName}
                    </Typography>
                    <Typography
                      align={"center"}
                      variant={"h6"}
                      component={"h5"}
                    >
                      {e.skillLevel}
                    </Typography>
                  </Paper>
                );
              })}
            </Paper>
          </div>
        </Grow>
      </div>
    );
  }
}

export default Skills;
