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
import "./display_img_carousel.css";
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
    const newIndex = isFirst
      ? IMAGES[props.project.name].length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const onClick = (index) =>
  {
    setCurrentIndex(index);
  };

  return (
    <div className="projectCard-slide-container">
      <div className="projectCard-slide-img-container">
        <button
          type="button"
          className="projectCard-slide-arrow-btn projectCard-slide-arrow-btn-left"
          onClick={previous}
        >
          <FontAwesomeIcon
            className="projectCard-slide-arrow-icon"
            icon={faAngleLeft}
          />
        </button>
        <img
          className="projectCard-slide-img"
          src={IMAGES[props.project.name][currentIndex]}
        />
        <button
          type="button"
          className="projectCard-slide-arrow-btn projectCard-slide-arrow-btn-right"
          onClick={next}
        >
          <FontAwesomeIcon
            className="projectCard-slide-arrow-icon"
            icon={faAngleRight}
          />
        </button>
      </div>
      <div className="projectCard-slide-indicator-container">
        {IMAGES[props.project.name].map((image, index) => (
          <div
            className={`projectCard-slide-indicator${
              index === currentIndex ? " active" : ""
            }`}
            key={image}
            onClick={() => onClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default DisplayImgCarousel;
