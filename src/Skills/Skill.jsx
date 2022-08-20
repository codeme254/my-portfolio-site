import React from "react";
// import testImg from '../Assets/Images/static-web-app.svg';

const Skill = ({ skillName, tools, skillImage }) => {
  return (
    <div className="skill">
      <img src={skillImage} alt={skillName} className="skill__image" />
      <p className="skill__skill-name">{skillName}</p>
      <p className="skill__tools">{tools}</p>
    </div>
  );
};

export default Skill;
