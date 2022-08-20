import React from "react";
import Title from '../Title/Title';
import Project from "./Project";

const Projects = () => {
    return(
        <section className="project-section">
            <Title mainTitle="My projects" backTitle="projects" />

            <div className="projects__container">
                <Project title="techathon" description="A landing or advertising page for a fictional huge tech hackathon that is going to happen for a whole week made using ReactJS and CSS." />
                <Project title="eldino" description="A landing for a fictional company that takes good care of old people at very chep or almost free cost developed using ReactJS and CSS." />
                <Project title="educatia" description="Also a landing page for a fictional cheap online learning platform created using ReactJS and CSS" />
                <Project title="zanablog" description="A blogging application developed with ReactJS and styled components, styled components is a CSS in JS technology that helps organize CSS." />
                <Project title="facebook ui clone" description="An almost exact clone of the facebook user interface or frontend using HTML, CSS and JavaScript with hardcoded data." />
                <Project title="youtube ui clone" description="An almost exact clone of the youtube user interface using ReactJS and CSS with hardcoded data and video living in it." />
            </div>
        </section>
    )
}

export default Projects;