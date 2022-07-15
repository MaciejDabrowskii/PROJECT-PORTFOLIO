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
    position: "relative",
  };
  const slideImgStyle = {
    margin: "0 auto",
    width: "100%",
    borderRadius: "10px",
  };
  const slideLeftArrowStyle = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    cursor: "pointer",
    color: "red",
    left: "20px",
    fontSize: "2rem",
  };
  const slideRightArrowStyle = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    cursor: "pointer",
    color: "red",
    right: "20px",
    fontSize: "2rem",
  };

  return (
    <div
      className="projectCard-slide-container"
      style={slideContainerStyle}
    >
      <FontAwesomeIcon
        icon={faAngleLeft}
        style={slideLeftArrowStyle}
        onClick={previous}
      />
      <FontAwesomeIcon
        icon={faAngleRight}
        style={slideRightArrowStyle}
        onClick={next}
      />
      <img
        className="projectCard-slide-img"
        src={IMAGES[props.project.name][currentIndex]}
        style={slideImgStyle}
      />
    </div>
  );
}

export default DisplayImgCarousel;
