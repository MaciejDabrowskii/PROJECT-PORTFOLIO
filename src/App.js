import React from "react";
import "./App.css";
import DisplayProjects from "./components/projects/display_projects";
import DisplayHeader from "./components/header/display_header";

function App()
{
  return (
    <div>
      <DisplayHeader />
      <h1 className="project-section-title">My Work</h1>
      <DisplayProjects />
    </div>
  );
}

export default App;
