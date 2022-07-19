import React from "react";
import "./App.css";
import DisplayProjects from "./components/projects/display_projects";
import DisplayHeader from "./components/header/display_header";

function App()
{
  return (
    <div>
      <DisplayHeader />
      <DisplayProjects />
    </div>
  );
}

export default App;
