import React from "react";
import Title from "../Title/Title";
import Project from "./Project";

import educatia from "../Assets/Images/educatia-sc.png";
import eldino from "../Assets/Images/eldino-sc.png";
import facebook from "../Assets/Images/fb-sc.png";
import techathon from "../Assets/Images/techathon-sc.png";
import youtube from "../Assets/Images/youtube-sc.png";
import zana from "../Assets/Images/zana-sc.png";

const Projects = () => {
  return (
    <section className="project-section">
      <Title mainTitle="My projects" backTitle="projects" />

      <div className="projects__container">
        <Project
          image = {techathon}
          title="techathon"
          description="A landing or advertising page for a fictional huge tech hackathon that is going to happen for a whole week made using ReactJS and CSS."
          gitLink="https://github.com/codeme254/techathon"
          liveLink="https://techathon-6c841.web.app/"
        />
        <Project
          image = {eldino}
          title="eldino"
          description="A landing for a fictional company that takes good care of old people at very chep or almost free cost developed using ReactJS and CSS."
          gitLink="https://github.com/codeme254/Eldino"
          liveLink="https://eldino-dcc98.web.app/"
        />
        <Project
          image = {educatia}
          title="educatia"
          description="Also a landing page for a fictional cheap online learning platform created using ReactJS and CSS"
          gitLink = "https://github.com/codeme254/educatia"
          liveLink = "https://educatia-87067.web.app/"
        />
        <Project
          image = {zana}
          title="zanablog"
          description="A blogging application developed with ReactJS and styled components, styled components is a CSS in JS technology that helps organize CSS."
          gitLink="https://github.com/codeme254/zana-blog-app"
          liveLink="https://zana-blog.web.app/"
        />
        <Project
          image = {facebook}
          title="facebook ui clone"
          description="An almost exact clone of the facebook user interface or frontend using HTML, CSS and JavaScript with hardcoded data."
          gitLink="https://github.com/codeme254/Faceboo-UI-Clone"
          liveLink="https://facebook-ui-clone-e7980.web.app"
        />
        <Project
          image = {youtube}
          title="youtube ui clone"
          description="An almost exact clone of the youtube user interface using ReactJS and CSS with hardcoded data and video living in it."
          gitLink="https://github.com/codeme254/youtube-ui-clone"
          liveLink="https://ui-clone-ad319.web.app/"
        />
      </div>
    </section>
  );
};

export default Projects;
