import React from "react";

import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";

function ImageAvatars(props) {
  return (
    <Grid container justify="center" alignItems="center">
      <Avatar alt="Remy Sharp" src={props.Src} style={props.AvatarClass} />
      <span className={props.Class}>{props.Title}</span>
    </Grid>
  );
}

export default ImageAvatars;
