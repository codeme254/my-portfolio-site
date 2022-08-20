import React from "react";
import me from "../Assets/Images/me1.png";
import resume from "../Assets/Documents/otwoma-dennis-resume.pdf";

import { LinkedIn, Github, Download } from "../Icons/Icons";
const Home = () => {
  return (
    <section className="home">
      <div className="home__textbox home__flex">
        <p className="home__textbox--txt-small">Hello!</p>
        <h1 className="home__textbox--txt-main">
          I am <span>Dennis Otwoma</span>, a <span>Web Developer</span> welcome
          here.
        </h1>
        <div className="home__textbox--links">
          <a className="home__textbox--link" download href={resume}>
            <Download />
            download resume
          </a>
          <a
            className="home__textbox--link"
            href="https://github.com/codeme254"
            target="_blank"
            rel="noreferrer"
          >
            <Github />
            GitHub
          </a>
          <a
            className="home__textbox--link"
            href="https://www.linkedin.com/in/otwoma/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedIn />
            LinkedIn
          </a>
        </div>
      </div>
      <div className="home__image home__flex">
        <img src={me} alt="that's me" />
      </div>
    </section>
  );
};

export default Home;
