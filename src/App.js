import React from "react";
import "./App.css";
import DisplayProjects from "./components/projects/display_projects";
import DisplayHeader from "./components/header/display_header";
import DisplayFooter from "./components/footer/display_contact_info";

function App()
{
  return (
    <div>
      <DisplayHeader />
      <DisplayProjects />
      <DisplayFooter />
    </div>
  );
}

export default App;
