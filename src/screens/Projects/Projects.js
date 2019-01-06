import React, { Component } from "react";
import Grow from "@material-ui/core/Grow";
import "./Projects.css";
import Data from "../../static/data/data.json";
import { Paper, Typography } from "@material-ui/core";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transition: true,
      projects: []
    };
  }
  componentWillMount() {
    this.setState({ projects: [...Data.Projects] });
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
          <div className="projectsDiv">
            <Paper style={{ padding: 10 }}>
              <Typography
                align={"center"}
                gutterBottom
                variant={"h4"}
                component={"h5"}
              >
                Projects
              </Typography>
              {this.state.projects.map((e, i) => {
                return (
                  <Paper key={i} elevation={20} style={{ padding: 20 }}>
                    <Typography
                      align={"center"}
                      variant={"h6"}
                      component={"h5"}
                    >
                      {e.projectName}
                    </Typography>
                    <Typography
                      align={"center"}
                      variant={"h6"}
                      component={"h5"}
                    >
                      <a className="projectLink" href={e.projectDemoUrl}>
                        View Project
                      </a>
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

export default Projects;
