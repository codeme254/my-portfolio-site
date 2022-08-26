import React from "react";
import Repo from "./Repo";

import logo from "../Assets/Images/logo.png";

import {
  Message,
  Facebook,
  Twitter,
  Github,
  LinkedIn,
} from "../Icons/Icons";

const ReposConnect = () => {
  return (
    <section className="repos-connect-section">
      <div className="repos repos-connect__side">
        <h2 className="section__title-sub">my favorite github repos</h2>
        <div className="repos__container">
          <Repo
            repoName="regular expressions"
            description="Contains a tutorial about regular expressions, it basically has everything you need to know as far as regular expressions are concerned, I did my best to explain everything in black and white here"
            link="https://github.com/codeme254/regex"
          />
          <Repo
            repoName="low level programming (C)"
            description="Contains basic to advanced code concepts and challenges in C programming/low level programming, the documentation for this project is coming out soon but for now, there is well documented code for the same."
            link="https://github.com/codeme254/alx-low_level_programming"
          />
          <Repo
            repoName="data structures and algorithms"
            description="Here, I do my best to explain various data structures and algorithms in the easiest way possible to understand, I do this using JavaScript and the code files contain small documentations as well as the READMEs"
            link="https://github.com/codeme254/data-structures-and-algorithms"
          />
          <Repo
            repoName="printf"
            description="My peer and I tried to replicate the functionality of the printf project with C language, this was a major project we did in the alx software engineering bootcamp among other projects we did."
            link="https://github.com/codeme254/printf"
          />
        </div>
      </div>

      <div className="repos-connect__side">
        <h2 className="section__title-sub">connect with me please</h2>
        <div className="connections--container">
          <img src={logo} alt="my logo" className="section-connect-image" />

          <div className="socials__container">
            <div className="social">
              <Message />
              <p className="social-__text">otwomadennis365@gmail.com</p>
            </div>
            <div className="social">
              <LinkedIn />
              <p className="social-__text">https://linkedin.com/in/otwoma</p>
            </div>
            <div className="social">
              <Github />
              <p className="social-__text"> https://github.com/codeme254</p>
            </div>
            <div className="social">
              <Facebook />
              <p className="social-__text">Zaphenath Paneah</p>
            </div>
            <div className="social">
              <Twitter />
              <p className="social-__text">otwomadennis365@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReposConnect;
