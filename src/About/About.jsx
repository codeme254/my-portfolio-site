import React, { useRef } from "react";
import Title from "../Title/Title.jsx";
import {
  Html5Icon,
  Github,
  Css3,
  JavaScript,
  ReactIcon,
  Sass,
  NodeIcon,
  PythonIcon,
  Git,
} from "../Icons/Icons.jsx";
// import img1 from '../Assets/Images/img1.jpg';
// import img2 from '../Assets/Images/img2.jpg';
// import img3 from '../Assets/Images/img3.jpg';
// import img4 from "../Assets/Images/img4.jpg";
import logo from "../Assets/Images/logo-main.png";

const About = () => {
  const mainContainerRef = useRef(null);
  const handleClick = (e) => {
    const clickedDataset = e.target.dataset.child;

    const children = Array.from(mainContainerRef.current.children);
    children.forEach((child) => {
      child.classList.remove("show__about__abs");
      // child.classList.add('about__abs');
    });
    children.forEach((child) => {
      const toShow = child.dataset.child;
      if (clickedDataset === toShow) {
        child.classList.add("show__about__abs");
        child.classList.remove("about__abs");
      } else {
        child.classList.add("about__abs");
      }
    });
  };
  return (
    <section className="about-section" id="about">
      <Title mainTitle="about me" backTitle="about" />

      <div className="about__container">
        <div className="about__container--left">
          <img src={logo} alt="laptop" className="about__container--image" />
        </div>
        <div className="about__container--right">
          <div className="about__container--buttons">
            <button
              className="about__container--button"
              data-child="about"
              onClick={handleClick}
            >
              about
            </button>
            <button
              className="about__container--button"
              data-child="tools"
              onClick={handleClick}
            >
              tools
            </button>
          </div>

          <div className="about__container--cover" ref={mainContainerRef}>
            <div className="about__container--text" data-child="about">
              <p className="about--text">
                My name is Otwoma Dennis or you can call me Zaph if you want, I
                am a frontend web developer with ReactJS, CSS, Material UI and
                styled components, I also do backend web development with
                NodeJS, express, MongoDB, Mongoose and a bit of sql, I am also
                good in Bash Scripting and the Linux Command Line, I however put
                my full focus in developing user friendly and responsive
                webpages keepable of converting in any business whatsoever. I
                take pride in what I do, I am a team player and I pay attention
                to details in any solution am working on. More information about
                me is in this website.
              </p>
            </div>
            <div
              className="about__container--tools about__abs"
              data-child="tools"
            >
              <span className="about__icon">
                <ReactIcon />
              </span>
              <span className="about__icon">
                <JavaScript />
              </span>
              <span className="about__icon">
                <PythonIcon />
              </span>
              <span className="about__icon">
                <Css3 />
              </span>
              <span className="about__icon">
                <Html5Icon />
              </span>
              <span className="about__icon">
                <Github />
              </span>
              <span className="about__icon">
                <Git />
              </span>
              <span className="about__icon">
                <Sass />
              </span>
              <span className="about__icon">
                <NodeIcon />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
