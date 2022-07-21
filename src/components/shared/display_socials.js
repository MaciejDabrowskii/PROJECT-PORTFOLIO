/* eslint-disable react/prop-types */
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

function DisplaySocials({ element })
{
  return (
    <div className={`socials-container-${element}`}>
      <div
        className={`socials-linkedIn-${element}`}
        onClick={() => openURL(DATA.Personal.linkedinURL)}
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </div>
      <div
        className={`socials-github-${element}`}
        onClick={() => openURL(DATA.Personal.gitURL)}
      >
        <FontAwesomeIcon icon={faGithub} />
      </div>
      <div
        className={`socials-soundcloud-${element}`}
        onClick={() => openURL(DATA.Personal.soundcloudURL)}
      >
        <FontAwesomeIcon icon={faSoundcloud} />
      </div>
    </div>
  );
}

export default DisplaySocials;
