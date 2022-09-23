/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React, { useState } from "react";
import "./App.css";
import DisplayProjects from "./components/projects/display_projects";
import DisplayHeader from "./components/header/display_header";
import DisplayFooter from "./components/footer/display_contact_info";
import DATA from "./data/data";
import DisplayImgCarousel
  from "./components/projects/modules/display_img_carousel";
import { imagesL } from "./data/projects_imgs";

function App()
{
  const [overlay, setOverlay] = useState(false);

  const [preview, setPreview] = useState(() =>
  {
    const obj = {};
    DATA.Projects.map((project) =>
    {
      obj[project.name] = false;
    });
    return obj;
  });

  const setImgPrevew = ({ name }) =>
  {
    setPreview((prevState) => ({ ...prevState, [name]: !prevState[name] }));
    setOverlay((PrevState) => !PrevState);
  };

  return (
    <div className="App">
      <DisplayHeader />
      <DisplayProjects
        setImgPrevew={setImgPrevew}
        overlay={overlay}
      />
      <DisplayFooter />
      {overlay && (
      <div className="overlay">
        { DATA.Projects.map((project) =>
        {
          if (preview[project.name])
          {
            return (
              <div
                key={project.name}
                className="overlay-preview-container"
              >
                <div className="overlay-wrapper">
                  <DisplayImgCarousel
                    project={project}
                    providedClass="overlay"
                    key={project.name}
                    setImgPrevew={setImgPrevew}
                    overlay={overlay}
                    IMAGES={imagesL}
                    showClose
                  />
                </div>
              </div>
            );
          }
        })}
      </div>
      )}
    </div>
  );
}

export default App;
