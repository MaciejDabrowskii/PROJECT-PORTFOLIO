/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import openURL from "../../../utils/open_url";

function DisplayLinks(props)
{
  return (
    <div className="projectCard-links-container">
      <div
        onClick={() => openURL(props.project.gitURL)}
        className="projectCard-link-github"
      >
        <FontAwesomeIcon
          className="projectCard-link-github-icon"
          icon={faGithub}
        />

      </div>
      <div
        className="projectCard-link-preview"
        onClick={() => openURL(props.project.previewURL)}
      >
        {" "}
        <FontAwesomeIcon
          className="projectCard-link-preview-icon"
          icon={faArrowUpRightFromSquare}
        />

      </div>
    </div>
  );
}
export default DisplayLinks;
