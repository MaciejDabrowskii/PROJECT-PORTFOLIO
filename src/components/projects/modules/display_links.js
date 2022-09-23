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
  const { project } = props;
  return (
    <div className="projectCard-links-container">
      {project.gitURL && (
      <div
        onClick={() => openURL(project.gitURL)}
        className="projectCard-link-github"
      >
        <FontAwesomeIcon
          className="projectCard-link-github-icon"
          icon={faGithub}
        />
      </div>
      )}
      {project.previewURL && (
      <div
        className="projectCard-link-preview"
        onClick={() => openURL(project.previewURL)}
      >
        {" "}
        <FontAwesomeIcon
          className="projectCard-link-preview-icon"
          icon={faArrowUpRightFromSquare}
        />
      </div>
      )}

    </div>
  );
}
export default DisplayLinks;
