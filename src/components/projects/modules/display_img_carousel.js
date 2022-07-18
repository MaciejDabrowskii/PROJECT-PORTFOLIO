/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import IMAGES from "../../../data/projects_imgs";

function DisplayImgCarousel(props)
{
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () =>
  {
    const isLast = currentIndex === IMAGES[props.project.name].length - 1;
    const newIndex = isLast ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const previous = () =>
  {
    const isFirst = currentIndex === 0;
    const newIndex = isFirst ? IMAGES[props.project.name].length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const slideContainerStyle = {
    // position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const slideImgStyle = {
    // margin: "0 auto",
    width: "85%",
    borderRadius: "10px",
  };
  const slideLeftArrowStyle = {
    // position: "absolute",
    // top: "50%",
    // transform: "translate(0, -50%)",
    display: "flex",
    alignItems: "center",
    fontSize: "2.5rem",
    cursor: "pointer",
    color: "rgb(226, 187, 125)",
    // right: "20px",
    justifyContent: "center",
    margin: "0 10px",
  };
  const slideRightArrowStyle = {
    // position: "absolute",
    // top: "50%",
    // transform: "translate(0, -50%)",
    display: "flex",
    alignItems: "center",
    fontSize: "2.5rem",
    cursor: "pointer",
    color: "rgb(226, 187, 125)",
    // right: "20px",
    justifyContent: "center",
    margin: "0 10px",
  };

  return (
    <div
      className="projectCard-slide-container"
      style={slideContainerStyle}
    >
      <div
        className="projectCard-slide-arrow"
        onClick={previous}
        style={slideLeftArrowStyle}
      >
        <FontAwesomeIcon
          icon={faAngleLeft}
        />
      </div>
      <img
        className="projectCard-slide-img"
        src={IMAGES[props.project.name][currentIndex]}
        style={slideImgStyle}
      />
      <div
        className="projectCard-slide-arrow"
        onClick={next}
        style={slideRightArrowStyle}
      >
        <FontAwesomeIcon
          icon={faAngleRight}
        />
      </div>
    </div>
  );
}

export default DisplayImgCarousel;
