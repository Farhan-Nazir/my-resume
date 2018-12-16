import React, { Component } from "react";
import ImageAvatars from "../../components/Avatar/Avatar";
import Miss from "../../static/images/missExample.jpg";

const styles = {
  avatar: {
    margin: 10
  }
};

class Skills extends Component {
  render() {
    return (
      <div>
        My Skills
        <ImageAvatars Src={Miss} AvatarClass={styles.avatar} />
      </div>
    );
  }
}

export default Skills;
