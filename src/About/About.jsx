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
import img4 from "../Assets/Images/img4.jpg";

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
    <section className="about-section">
      <Title mainTitle="about me" backTitle="about" />

      <div className="about__container">
        <div className="about__container--left">
          <img src={img4} alt="laptop" className="about__container--image" />
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam praesentium aperiam accusantium iure quae asperiores
                laborum, modi non voluptate atque quasi rerum aliquam
                necessitatibus facilis. Inventore expedita aliquam facilis ipsum
                ducimus iure consectetur ratione enim illum nam. Necessitatibus
                tenetur maiores veniam cum impedit amet quaerat, voluptas
                molestias, deleniti ab doloremque!
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
