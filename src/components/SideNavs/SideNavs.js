import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { IoIosMenu } from "react-icons/io";

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
};

class SideNavs extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false
  };
  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  render() {
    const { classes, NavItems } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          {NavItems.map(navItem => (
            <ListItem
              button={true}
              key={navItem.id}
              component={this.props.Component}
              to={navItem.link}
            >
              <ListItemText primary={navItem.name} />
            </ListItem>
          ))}
        </List>
      </div>
    );

    return (
      <div>
        <IoIosMenu
          onClick={this.toggleDrawer("left", true)}
          style={{ width: 40, height: 40, color: "white", cursor: "pointer" }}
        />

        <Drawer
          open={this.state.left}
          onClose={this.toggleDrawer("left", false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer("left", false)}
            onKeyDown={this.toggleDrawer("left", false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

SideNavs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SideNavs);
