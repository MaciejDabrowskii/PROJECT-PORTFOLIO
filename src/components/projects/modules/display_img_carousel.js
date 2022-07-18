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
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const slideImgStyle = {
    width: "85%",
    borderRadius: "10px",
  };
  const slideLeftArrowStyle = {
    display: "flex",
    alignItems: "center",
    fontSize: "2.5rem",
    cursor: "pointer",
    color: "rgb(226, 187, 125)",
    justifyContent: "center",
    margin: "0 10px",
    border: "none",
  };
  const slideRightArrowStyle = {
    display: "flex",
    alignItems: "center",
    fontSize: "2.5rem",
    cursor: "pointer",
    color: "rgb(226, 187, 125)",
    justifyContent: "center",
    margin: "0 10px",
    border: "none",
  };

  return (
    <div
      className="projectCard-slide-container"
      style={slideContainerStyle}
    >
      <button
        type="button"
        className="projectCard-slide-arrow"
        onClick={previous}
        style={slideLeftArrowStyle}
      >
        <FontAwesomeIcon
          icon={faAngleLeft}
        />
      </button>
      <img
        className="projectCard-slide-img"
        src={IMAGES[props.project.name][currentIndex]}
        style={slideImgStyle}
      />
      <button
        type="button"
        className="projectCard-slide-arrow"
        onClick={next}
        style={slideRightArrowStyle}
      >
        <FontAwesomeIcon
          icon={faAngleRight}
        />
      </button>
    </div>
  );
}

export default DisplayImgCarousel;
