/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import ICONS from "../../../data/icons";

function DisplayStack(props)
{
  return (
    <div
      className="projectCard-stack-container"
    >
      <div className="projectCard-stack-technologies">
        Technologies:
        {
            props.Technologies.map((technologie) => (
              <img
                src={ICONS[technologie]}
                alt={technologie}
                className="projectCard-stack-technologies-icon"
              />
            ))
        }
      </div>
      {props.Additional
      && (
      <div className="projectCard-stack-additional">
        Additional:
        {
            props.Additional.map((el) => (
              <img
                src={`${ICONS[el]}`}
                alt={el}
                className="projectCard-stack-technologies-icon"
              />
            ))
        }
      </div>
      )}
    </div>
  );
}

export default DisplayStack;
