/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React from "react";
import DATA from "../../data/data";
import personalImg from "../../assets/Personal/personal_cropped.jpg";
import "./display_header.css";
import DisplaySocials from "../shared/display_socials";

function DisplayHeader()
{
  return (
    <section className="header">
      <div className="header-container">
        <div className="header-info-container">
          <img className="header-img" src={personalImg} alt="Maciej Dąbrowski" />
          <div className="header-info">
            <h1 className="header-title">{DATA.Personal.name}</h1>
            <h3 className="header-about">
              {DATA.Personal.about}
            </h3>
            <DisplaySocials element="header" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default DisplayHeader;
