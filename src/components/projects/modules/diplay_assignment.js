/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import ICONS from "../../../data/icons";
import openURL from "../../../utils/open_url";

function DisplayAssignment(props)
{
  return (
    <div
      className="projectCard-assignment-container"
    >
      <p>Assignment:</p>
      <img
        onClick={() => openURL(props.project.assignmentURL)}
        src={ICONS.Odin}
        className="projectCard-assignment-logo"
        alt="ODIN logo"
      />
    </div>
  );
}
export default DisplayAssignment;
