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
    <div className="header-container">
      <div className="header-info-container">
        <img className="header-img" src={personalImg} alt="Maciej Dąbrowski" />
        <div className="header-info">
          <h1 className="header-title">{DATA.Personal.name}</h1>
          <h3 className="header-about">
            *Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
            velit soluta quis ratione et repellendus sapiente sint mollitia
            porro molestiae veritatis impedit facere id animi consequatur, fuga
            voluptatem sequi quas. ipsum dolor, sit amet consectetur adipisicing
            elit. Provident error dignissimos doloremque nisi nesciunt
            praesentium maiores ipsam eos culpa fugiat illum, sit, est accusamus
            odit dolore iusto, perspiciatis at quo?
          </h3>
          <DisplaySocials />
        </div>
      </div>
    </div>
  );
}
export default DisplayHeader;
