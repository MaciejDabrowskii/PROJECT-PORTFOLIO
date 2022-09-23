/* eslint-disable react/prop-types */
/* eslint-disable react/style-prop-object */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import uniqid from "uniqid";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import DATA from "../../data/data";
import DisplayStack from "./modules/display_stack_icons";
import DisplayImgCarousel from "./modules/display_img_carousel";
import DisplayLinks from "./modules/display_links";
import DisplayAssignment from "./modules/diplay_assignment";
import "./display_projects.css";
import { imagesS } from "../../data/projects_imgs";

function DisplayProjects(
  {
    setImgPrevew,
    overlay,
  },
)
{
  const [expand, setExpand] = useState(() =>
  {
    const obj = {};
    DATA.Projects.map((project) =>
    {
      obj[project.name] = false;
    });
    return obj;
  });

  const expandCard = (project) =>
  {
    setExpand((prevState) => ({ ...prevState, [project.name]: !prevState[project.name] }));
  };

  return (
    <section>
      <div className="projects">
        <h1 className="projects-title">My Work</h1>
        <div className="projectCard-container">
          {DATA.Projects.map((project) => (
            <div
              className={`projectCard${expand[project.name] ? " expand" : ""}`}
              key={project.name}
            >
              <DisplayImgCarousel
                project={project}
                providedClass="projectCard"
                setImgPrevew={setImgPrevew}
                overlay={overlay}
                IMAGES={imagesS}
                showClose={false}
              />
              <div className="projectCard-header">
                <h2 className="projectCard-title">{project.name}</h2>
                <DisplayLinks project={project} />
              </div>
              <p className="projectCard-info">{project.description}</p>
              <div
                className={`container${expand[project.name] ? " expand" : ""}`}
              >
                <DisplayStack
                  Technologies={project.Technologies}
                  Additional={project.Additional}
                />
                <DisplayAssignment project={project} />
              </div>
              <div
                className="projectCard-expand-container"
                style={{
                  transform: expand[project.name] ? "rotateX(180deg)" : "none",
                }}
              >
                <button
                  type="button"
                  className="projectCard-expand-btn"
                  onClick={() => expandCard(project)}
                >
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className="projectCard-expand-icon"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <svg
        className="separator-bottom"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="90"
        viewBox="0.1 0.3 200 19"
        preserveAspectRatio="none"
      >
        <g transform="translate(-0.21755166,-100.15454)">
          <path
            style={{ fill: "rgb(250, 84, 54)" }}
            d="M 0.2688579,100.29477 H 200.98548 c 0,0 -99.37375,39.84098 -200.7166221,0 z"
          />
        </g>
      </svg>
    </section>
  );
}

export default DisplayProjects;
