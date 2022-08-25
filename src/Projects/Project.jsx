import React from "react";

import img2 from "../Assets/Images/img1.jpg";
import { Github, Fire } from "../Icons/Icons";
const Project = ({ image, title, description, liveLink, gitLink }) => {
  return (
    // <a href={liveLink || gitLink || 'https://github.com/codeme254'} className="project-link-wrapper">
    <div className="project">
      <div className="project__image">
        <img
          src={image || img2}
          alt="project _image"
          className="project__image--img"
        />
        <div className="project__swipe-in-details">
          <h2 className="project__title project__title--black">{title}</h2>
          <div className="project__links--top">
            <a
              href={gitLink || "https://github.com/codeme254"}
              className="project__link"
              target="_blank"
              rel="noreferrer"
            >
              <Github /> visit codebase
            </a>
            <a
              href={liveLink || "https://github.com/codeme254"}
              className="project__link"
              target="_blank"
              rel="noreferrer"
            >
              <Fire /> live project
            </a>
          </div>
        </div>
      </div>
      <div className="project__body">
        <h2 className="project__title">{title}</h2>
        <div className="project__body--description">
          <p className="project__description">{description}</p>
        </div>
        <div className="project__body--links">
          <a
            href={gitLink || "https://github.com/codeme254"}
            className="project__link"
            target="_blank"
            rel="noreferrer"
          >
            <Github /> codebase
          </a>
          <a
            href={liveLink || "https://github.com/codeme254"}
            className="project__link"
            target="_blank"
            rel="noreferrer"
          >
            <Fire /> visit
          </a>
        </div>
      </div>
    </div>
    // </a>
  );
};

export default Project;
