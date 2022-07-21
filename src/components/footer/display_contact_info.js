/* eslint-disable max-len */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import DATA from "../../data/data";
import DisplaySocials from "../shared/display_socials";
import personalImg from "../../assets/Personal/personal_cropped.jpg";
import "./display_contact_info.css";

function DisplayFooter()
{
  return (
    <section className="footer">
      <div className="contact-info-container">
        <div className="contact-info">
          <h1 className="contact-info-title">Contact me</h1>
          <p className="contact-info-annotation">Please get in touch if you think our work coud be muttually beneficial!</p>
          <p className="contact-info-address">{DATA.Personal.address}</p>
          <div className="contact-info-phone-container">
            <FontAwesomeIcon
              className="contact-info-phone-icon"
              icon={faPhone}
            />
            <a
              href={`tel:${DATA.Personal.phone}`}
              className="contact-info-phone-link"
            >
              {DATA.Personal.phone}

            </a>
          </div>
          <div className="contact-info-email-container">
            <FontAwesomeIcon
              className="contact-info-email-icon"
              icon={faEnvelope}
            />
            <a
              href={`mailto:${DATA.Personal.email}`}
              className="contact-info-phone-link"
            >
              {DATA.Personal.email}

            </a>
          </div>
        </div>
        <div>
          <img className="footer-img" src={personalImg} alt="Maciej Dąbrowski" />
        </div>
      </div>
      <DisplaySocials element="footer" />
    </section>
  );
}

export default DisplayFooter;
