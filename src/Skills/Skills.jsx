import Skill from "./Skill";
import Title from '../Title/Title';
import frontendSkill from '../Assets/Images/responsive-web-design.svg';
import backendSkillImg from '../Assets/Images/backend-web-development.svg';
import shellScriptingImg from '../Assets/Images/bash.svg';
import debuggingImg from '../Assets/Images/debugging.svg';
import fullStackImg from '../Assets/Images/full-stack-web-dev.svg';
import lowLevelImg from '../Assets/Images/low-level-programming.svg';
import pairProgrammmingImg from '../Assets/Images/pair-programming.svg';
import staticWebSkillImg from '../Assets/Images/static-web-app.svg';

const Skills = () => {
    return(
        <section className="skills-section">
            <Title mainTitle="my skills" backTitle="skills" />
            <div className="skills-container">
                <Skill skillImage={frontendSkill} skillName="responsive web design" tools="HTML, CSS" />
                <Skill skillImage={backendSkillImg} skillName="back-end web dev" tools="NodeJS, express, MongoDB, Mongoose, Firebase" />
                <Skill skillImage={shellScriptingImg} skillName="bash scripting and cli" tools="Linux, Bash" />
                <Skill skillImage={debuggingImg} skillName="debugging/bug bounty" tools="Chrome, JavaScript" />
                <Skill skillImage={fullStackImg} skillName="high level programming" tools="Python (C# coming soon)" />
                <Skill skillImage={lowLevelImg} skillName="low level programming" tools="C" />
                <Skill skillImage={pairProgrammmingImg} skillName="pair programming" tools="GitHub, vs code liveshare" />
                <Skill skillImage={staticWebSkillImg} skillName="static web pages" tools="HTML, CSS, gsap" />
                <Skill skillImage={staticWebSkillImg} skillName="static web pages" tools="HTML, CSS, gsap" />
            </div>
        </section>
    )
}

export default Skills;