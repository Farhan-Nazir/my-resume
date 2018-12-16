import React, { Component } from "react";
import ImageAvatars from "../../components/Avatar/Avatar";
import Miss from "../../static/images/missExample.jpg";
import "./Education.css";

const styles = {
  avatar: {
    border: "4px solid black"
  }
};

{
  /* The naming convension we are using is not consistant. 
     * for example, here we are importing the Avatar as ImageAvatars, where at the MainScreen.js 
       we are importing it as Avatar. this is somehow confusing
     */
}

class Education extends Component {
  render() {
    return (
      <div className="avatarDiv">
        My Education
        <ImageAvatars Src={Miss} AvatarClass={styles.avatar} />
      </div>
    );
  }
}

export default Education;
