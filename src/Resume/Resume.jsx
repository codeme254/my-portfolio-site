import React from "react";
import Title from "../Title/Title";
import TimeCard from "./TimeCard";

const ResumeSection = () => {
  return (
    <section className="resume-section">
      <Title mainTitle="resume" backTitle="mini-timeline" />

      <div className="time-cards__container">
        <TimeCard
          year="June 2022 - current"
          working="alx software engineering"
          institution="alx, ali, holberton"
          descritption="The ALX Holberton Software Engineering programme is a 12-month(70h/week) immersive programme that engages technology enthusiasts and budding software engineers in a variety of programmes across in-demand tech disciplines to prepare them for a global career as a Full-Stack Developer."
        />

        <TimeCard
          year="Feb 2022 - current"
          working="Microsoft Learn Student Ambassador"
          institution="Microsoft"
          descritption="Learn Student Ambassadors are a global group of campus leaders who are eager to help fellow students, create robust tech communities and develop technical and career skills for the future."
        />

        <TimeCard
          year="Feb 2022 - Apr 2022"
          working="Game of Learners Hackathon"
          institution="Micorosoft"
          descritption="Participated in the Microsoft Game of Learners Season 3 hackathon where we were seeking a soution to climate change, my team became first runners up, I worked on the frontend of our solution wit ReactJS and CSS."
        />

        <TimeCard
          year="september 2020 - current"
          working="Bsc computer science"
          institution="Kirinyaga university kenya"
          descritption="Pursuing my undergraduate degree in Computer Science in Kirinyaga University, Kirinyaga county Kenya, started in September 2020 and expects completion by September 2024"
        />

        <TimeCard
          year="Feb 2016 - Dec 2019"
          working="K.C.S.E"
          institution="Butula Boys National School"
          descritption="Attended Butula Boys National School from the year 2016 to 2019, did my Kenya Certificate of Secondary Education (K.C.S.E) and I scored a B+ with a straigh A in Computer Studies and A- in Mathematics."
        />
        <TimeCard
          year="2008 - 2015"
          working="K.C.P.E"
          institution="Egerton Primary School"
          descritption="Attended Egerton School from the year 2008 to 2015, did my Kenya Certificate of Primary Education (K.C.P.E) and I scored a B+ with a straigh A in Mathematics."
        />
      </div>
    </section>
  );
};

export default ResumeSection;
