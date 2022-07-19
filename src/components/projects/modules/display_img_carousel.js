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

  const onClick = (index) =>
  {
    setCurrentIndex(index);
  };

  const slideContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const slideImgContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const slideImgStyle = {
    width: "90%",
    borderRadius: "10px",
    height: "auto",
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
      <div
        className="projectCard-slide-img-container"
        style={slideImgContainerStyle}
      >
        <button
          type="button"
          className="projectCard-slide-arrow-btn"
          onClick={previous}
          style={slideLeftArrowStyle}
        >
          <FontAwesomeIcon
            className="projectCard-slide-arrow-icon"
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
          className="projectCard-slide-arrow-btn"
          onClick={next}
          style={slideRightArrowStyle}
        >
          <FontAwesomeIcon
            className="projectCard-slide-arrow-icon"
            icon={faAngleRight}
          />
        </button>
      </div>
      <div className="projectCard-slide-indicator-container">
        {
        IMAGES[props.project.name].map((image, index) => (
          <div
            className={`projectCard-slide-indicator${index === currentIndex ? " active" : ""}`}
            key={image}
            onClick={() => onClick(index)}
          />
        ))
      }
      </div>
    </div>
  );
}

export default DisplayImgCarousel;
