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
        <h2 className="section__title-sub">best of my github repos so far</h2>
        <div className="repos__container">
          <Repo
            repoName="regular expressions"
            description="Contains a tutorial about regular expressions, it basically has everything you need to know as far as regular expressions are concerned, I did my best to explain everything in black and white here"
            link="/"
          />
          <Repo
            repoName="regular expressions"
            description="Contains a tutorial about regular expressions, it basically has everything you need to know as far as regular expressions are concerned, I did my best to explain everything in black and white here"
            link="/"
          />
          <Repo
            repoName="regular expressions"
            description="Contains a tutorial about regular expressions, it basically has everything you need to know as far as regular expressions are concerned, I did my best to explain everything in black and white here"
            link="/"
          />
          <Repo
            repoName="regular expressions"
            description="Contains a tutorial about regular expressions, it basically has everything you need to know as far as regular expressions are concerned, I did my best to explain everything in black and white here"
            link="/"
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
