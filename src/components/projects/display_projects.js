/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React, { useState, useEffect } from "react";
import DATA from "../../data/data";
import DisplayStack from "./modules/display_stack_icons";
import DisplayImgCarousel from "./modules/display_img_carousel";
import DisplayProjectInfo from "./modules/display_project_info";

function DisplayProjects()
{
  const [expand, setExpand] = useState(DATA.Projects.map((project) => ({ name: project.name, expand: false })));
  console.log(expand);
  return (
    <div className="projectCard-container">
      {
        DATA.Projects.map((project) => (
          <div className="projectCard">
            <DisplayProjectInfo project={project} />
            <DisplayImgCarousel
              project={project}
            />
            <p className="projectCard-info">{project.description}</p>
            <DisplayStack
              Technologies={project.Technologies}
              Additional={project.Additional}
            />
          </div>
        ))
}
    </div>
  );
}

export default DisplayProjects;
