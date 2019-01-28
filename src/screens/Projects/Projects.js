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
                variant={"display1"}
                component={"h5"}
                style={{
                  padding: "1em 0 0.5em 0",
                  fontWeight: "700"
                }}
              >
                Projects
              </Typography>
              {this.state.projects.map((e, i) => {
                return (
                  <div key={i} style={{ margin: "2em 0" }}>
                    <Typography
                      variant={"h5"}
                      component={"h5"}
                      style={{ textAlign: "center" }}
                    >
                      {e.projectName}
                    </Typography>
                    <Typography
                      align={"center"}
                      variant={"subheading"}
                      style={{
                        padding: "0.5em 0 0.25em 0"
                      }}
                    >
                      <a
                        className="projectLink"
                        href={e.projectDemoUrl}
                      >
                        View Project
                      </a>
                    </Typography>
                  </div>
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
