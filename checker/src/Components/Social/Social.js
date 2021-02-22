import React, { Component } from "react";
import { observer } from "mobx-react";
import Info from "../Info/Info";
import "../../css/Social.css";
/**
 * npm install @fortawesome/fontawesome-svg-core --save
 * npm install @fortawesome/react-fontawesome --save
 * npm install @fortawesome/free-brands-svg-icons --save
 */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubAlt,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

class Social extends Component {
  render() {
    return (
      <div className="social-container">
        <a
          href={"https://github.com/" + Info.githubUser}
          className="github social"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithubAlt} size="1x" />
        </a>
        <a href={Info.linkedinUser} className="linkedin social" target="_blank">
          <FontAwesomeIcon icon={faLinkedinIn} size="1x" />
        </a>
        <a
          href={"https://twitter.com/" + Info.twitterUser}
          className="twitter social"
          target="_blank"
        >
          <FontAwesomeIcon icon={faTwitter} size="1x" />
        </a>
        <div>
          <img id="profilePic" src={Info.profilePicture} />
        </div>
        <div>
          <p>galactic checker</p>
        </div>
      </div>
    );
  }
}
export default observer(Social);
