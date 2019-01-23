import React, { Component } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
//
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Icon from "@material-ui/core/Icon";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";

import Github from '../../components/Github/Github';

class MyGithub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "SamTabaja",
      data: {},
      value: ""
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { data } = this.state;
    

    return (
      <div style={{ color: "black"}}>
        {/* {console.log(this.state.data)} */}
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={8}>
            <Paper style={{ height: "500px", margin: "8em" }}>
              <Github Username={e => this.setState({ data: e })} />

              <Grid item>
                <Grid container style={{ padding: 10 }}>
                  <Grid key={0} style={{ padding: "0.2em" }} item>
                    <Avatar
                      alt="Farhan Nazir"
                      src={data.avatar_url}
                      justify="flex-start"
                      style={{ margin: 30, width: 250, height: 250 }}
                    />
                  </Grid>
                  <Paper>
                    <Grid key={1} style={{ width: 250, height: 310 }}>
                      <Paper>Repositories</Paper>
                      <br/>
                      {`Public Repositories: ${data.public_repos}`}
                    </Grid>
                    
                    
                  </Paper>
                  <Grid key={2}>
                    <Paper>Test 1</Paper>
                  </Grid>
                </Grid>
                <Grid item key={3} sm={15}>
                  <Paper>
                    <Typography gutterBottom noWrap>
                      {data.bio}
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>

              <BottomNavigation showLabels>
                <BottomNavigationAction
                  label={"Profile Last updated: " + data.updated_at}
                  icon={<RestoreIcon />}
                />
                <BottomNavigationAction
                  label="@"
                  value="favorites"
                  icon={<FavoriteIcon />}
                />
                <BottomNavigationAction
                  label={data.location}
                  icon={<LocationOnIcon />}
                />
              </BottomNavigation>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default MyGithub;
