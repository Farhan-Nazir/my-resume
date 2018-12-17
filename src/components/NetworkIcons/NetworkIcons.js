import React, { Component } from "react";
import Data from "../../static/data/data.json";
import {
  IoLogoLinkedin,
  IoLogoCodepen,
  IoLogoGithub,
  IoLogoFacebook,
  IoLogoInstagram
} from "react-icons/io";

class NetworkIcons extends Component {
  render() {
    return (
      <div>
        <a
          href={Data.NetworkIcons[0].URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoGithub />
        </a>
        <a
          href={Data.NetworkIcons[1].URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoLinkedin />
        </a>

        <a
          href={Data.NetworkIcons[2].URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoCodepen />
        </a>
        <a
          href={Data.NetworkIcons[3].URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoFacebook />
        </a>
        <a
          href={Data.NetworkIcons[4].URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoInstagram />
        </a>
      </div>
    );
  }
}

export default NetworkIcons;
