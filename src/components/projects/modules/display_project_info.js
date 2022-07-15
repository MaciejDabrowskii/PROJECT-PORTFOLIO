/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import openURL from "../../../utils/open_url";

function DisplayProjectInfo(props)
{
  return (
    <div className="projectCard-info">
      <a href={props.project.gitURL}><h3>{props.project.name}</h3></a>
    </div>
  );
}

export default DisplayProjectInfo;
