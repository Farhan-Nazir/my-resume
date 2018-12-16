import React, { Component } from "react";
import Projects from "../Projects/Projects";
import Experiences from "../Experiences/Experiences";
import Skills from "../Skills/Skills";
import Education from "../Education/Education";
import Network from "../Network/Network";

import { Link } from "react-router-dom";
import ImageAvatars from "../../components/Avatar/Avatar";
import Miss from "../../static/images/missExample.jpg";

const styles = {
  avatar: {
    margin: 10
  }
};

class Resume extends Component {
  render() {
    return (
      <div>
        My Resume
        <ImageAvatars Src={Miss} AvatarClass={styles.avatar} />
      </div>
    );
  }
}

export default Resume;
