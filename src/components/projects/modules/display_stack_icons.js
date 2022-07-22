/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import ICONS from "../../../data/icons";

function DisplayStack(props)
{
  return (
    <div className="projectCard-stack-container">
      <div className="projectCard-stack-technologies-container">
        <p>Technologies:</p>
        <div className="projectCard-stack-technologies">
          {props.Technologies.map((technologie) => (
            <img
              key={technologie}
              src={ICONS[technologie]}
              alt={technologie}
              className="projectCard-stack-technologies-icon"
            />
          ))}
        </div>
      </div>
      {props.Additional && (
        <div className="projectCard-stack-additional-container">
          <p>Additional:</p>
          <div className="projectCard-stack-additional">
            {props.Additional.map((el) => (
              <img
                key={el}
                src={`${ICONS[el]}`}
                alt={el}
                className="projectCard-stack-technologies-icon"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default DisplayStack;
