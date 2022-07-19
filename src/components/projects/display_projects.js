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

function DisplayProjects()
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
    setExpand({ ...expand, [project.name]: !expand[project.name] });
  };

  const style = {
    display: "none",
    opacity: 1,
  };

  return (
    <section className="projects">
      <h1 className="project-section-title">My Work</h1>
      <div className="projectCard-container">
        {
        DATA.Projects.map((project) => (
          <div
            className={`projectCard${expand[project.name] ? " expand" : ""}`}
            key={project.name}
          >
            <DisplayImgCarousel
              project={project}
            />
            <div className="projectCard-header">
              <h2 className="projectCard-title">{project.name}</h2>
              <DisplayLinks project={project} />
            </div>
            <p className="projectCard-info">{project.description}</p>
            <div className={`container${expand[project.name] ? " expand" : ""}`}>
              <DisplayStack
                Technologies={project.Technologies}
                Additional={project.Additional}
              />
              <DisplayAssignment
                project={project}
              />
            </div>

            <div
              style={{ transform: expand[project.name] ? "rotateX(180deg)" : "none" }}
              className="projectCard-expand-container"
              onClick={() => expandCard(project)}
            >
              <FontAwesomeIcon icon={faAngleDown} />
            </div>
          </div>
        ))
      }
      </div>
    </section>
  );
}

export default DisplayProjects;
