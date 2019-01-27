import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
//
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";

import Github from '../../components/Github/Github';
import "./MyGithub.css";

const API = `https://api.github.com/users/`;

class MyGithub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Farhan-Nazir",
      data: {},
      value: ""
    };
  }

  fetchData = username => {
    fetch(API + username)
      .then(res => res.json())
      .then(data => {
        return this.props.Username(data)
      })
      .catch(err => err);
  };
  componentDidMount() {
    this.fetchData(this.state.username);
  }

  render() {
    const { data } = this.state;
    

    return (
      <div className="github-main">
        {/* {console.log(this.state.data)} */}
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={8}>
            <Paper >
              <Github Username={data => this.setState({ data })} />

              <Grid item>
                
                <Avatar
                      alt="Farhan Nazir"
                      src={data.avatar_url}
                      justify="flex-start"
                      style={{ margin: 10, width: 200, height: 200 }}
                    />
               
                
                  {`Public Repositories: ${data.public_repos}`}
                 
              
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
