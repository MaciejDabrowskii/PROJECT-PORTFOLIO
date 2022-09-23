/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
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

function DisplayImgCarousel(props)
{
  const {
    project,
    providedClass,
    setImgPrevew,
    overlay,
    IMAGES,
    showClose,
  } = props;
  console.log(IMAGES);
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () =>
  {
    const isLast = currentIndex === IMAGES[project.name].length - 1;
    const newIndex = isLast ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const previous = () =>
  {
    const isFirst = currentIndex === 0;
    const newIndex = isFirst
      ? IMAGES[project.name].length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const onClick = (index) =>
  {
    setCurrentIndex(index);
  };

  return (
    <div className={`${providedClass}-slide-container`}>
      {showClose && (
      <div className="overlay-preview-close-btn-container">
        <button
          className="overlay-preview-close-btn"
          onClick={() => setImgPrevew(project)}
          type="button"
        >
          ✖
        </button>
      </div>
      )}
      <div className={`${providedClass}-slide-img-container`}>
        <button
          type="button"
          className={`${providedClass}-slide-arrow-btn ${providedClass}-slide-arrow-btn-left`}
          onClick={previous}
        >
          <FontAwesomeIcon
            className={`${providedClass}-slide-arrow-icon`}
            icon={faAngleLeft}
          />
        </button>
        <img
          onClick={
            !overlay ? () => setImgPrevew(project) : undefined
          }
          className={`${providedClass}-slide-img`}
          src={IMAGES[project.name][currentIndex]}
        />
        <button
          type="button"
          className={`${providedClass}-slide-arrow-btn ${providedClass}-slide-arrow-btn-right`}
          onClick={next}
        >
          <FontAwesomeIcon
            className={`${providedClass}-slide-arrow-icon`}
            icon={faAngleRight}
          />
        </button>
      </div>
      <div className={`${providedClass}-slide-indicator-container`}>
        {IMAGES[project.name].map((image, index) => (
          <div
            className={`${providedClass}-slide-indicator${
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
