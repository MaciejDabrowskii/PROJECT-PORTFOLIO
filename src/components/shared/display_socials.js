/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faSoundcloud,
} from "@fortawesome/free-brands-svg-icons";
import DATA from "../../data/data";
import openURL from "../../utils/open_url";

function DisplaySocials()
{
  return (
    <div className="socials-container">
      <div
        className="socials-linkedIn"
        onClick={() => openURL(DATA.Personal.linkedinURL)}
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </div>
      <div
        className="socials-github"
        onClick={() => openURL(DATA.Personal.gitURL)}
      >
        <FontAwesomeIcon icon={faGithub} />
      </div>
      <div
        className="socials-soundcloud"
        onClick={() => openURL(DATA.Personal.soundcloudURL)}
      >
        <FontAwesomeIcon icon={faSoundcloud} />
      </div>
    </div>
  );
}

export default DisplaySocials;
