import React from "react";
import { Github, Twitter, LinkedIn, Facebook } from "../Icons/Icons";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__text">
        Developed with <span className="character">&hearts;</span> by{" "}
        <a href="https://linkedin.com/in/otwoma" className="footer__text--link">
          Otwoma Dennis
        </a>
      </p>

      <p className="footer__text">
        Thanks for taking your time to know me through my website. I{" "}
        <span className="footer__text--surp">
          L<span className="character">&hearts;</span>VE YOU.
        </span>
      </p>

      <div className="footer-social">
        <a
          href="https://www.github.com/codeme254"
          target="_blank"
          rel="noreferrer"
          className="social__link"
        >
          <Github />
        </a>
        <a href="/" className="social__link" target="_blank" rel="noreferrer">
          <Twitter />
        </a>
        <a
          href="https://www.linkedin.com/in/otwoma"
          className="social__link"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedIn />
        </a>
        <a href="/" className="social__link" target="_blank" rel="noreferrer">
          <Facebook />
        </a>
      </div>
    </footer>
  );
};
export default Footer;
