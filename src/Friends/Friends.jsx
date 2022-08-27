import React from "react";
import Title from "../Title/Title";
import Friend from "./Friend";
// import imgSamp from "../Assets/Images/user-1.jpg";

import ali from "../Assets/Images/ali.jpeg";
import ann from "../Assets/Images/ann.jpeg";
import humphrey from "../Assets/Images/humphrey.png";
import nathan from "../Assets/Images/nathan.png";
import okoth from "../Assets/Images/okoth.png";
import omuok from "../Assets/Images/omuok.jpeg";

const Friends = () => {
  return (
    <section className="friends-section" id="influencers">
      <Title mainTitle="friends" backTitle="my career influence" />
      <p className="section-text">
        These are the most influential people in my coding career, there are of
        course many others who I cannot put them here to save you the
        boredomness of having to view a lot of things but the ones listed here
        are the top influential people in my coding career. I OWE THE FOLLOWING
        PEOPLE A LOT:
      </p>

      <div className="friends--container">
        <Friend
          name="felix omuok"
          githubLink="https://github.com/dijiflex"
          linkedinLink="https://www.linkedin.com/in/dijiflex/"
          image={omuok}
          description="Full stack Software Engineer at Microsoft, ex-gold Microsoft Learn Student Ambassador"
        />
        <Friend
          name="Abubakar Ali"
          githubLink="https://github.com/Devabubakar"
          linkedinLink="https://www.linkedin.com/in/devabubakar/"
          description="Ex-Microsoft Software Engineering intern, HIGHLY EXPERTISED in ReactJS and NodeJS."
          image={ali}
        />
        <Friend
          name="humphrey muriungi"
          githubLink="https://github.com/humkym-code"
          linkedinLink="https://www.linkedin.com/in/humphrey-muriungi/"
          description="An expert in the power platform and also a web developer, also, he is a Microsoft Learn Student Ambassador."
          image={humphrey}
        />
        <Friend
          name="Nathaniel Warimwe"
          githubLink="https://github.com/nathandev254"
          linkedinLink="https://www.linkedin.com/in/nathaniel-warimwe-b24562233/"
          description="Seasoned and an expert in front-end web development, very good in user research for good user UX."
          image={nathan}
        />
        <Friend
          name="ivy mbogo"
          githubLink="https://github.com/Mbogo47"
          linkedinLink="https://www.linkedin.com/in/ivy-mbogo-590986239/"
          description="The closest Lady friend, highly expertised in Python programming."
        />
        <Friend
          name="samuel okoth"
          githubLink="https://github.com/SamuelOkoth"
          linkedinLink="https://www.linkedin.com/in/samuel-okoth-791100184/"
          description="Android apps developer, Google Developer Students Club Lead at Kirinyaga University, Kenya."
          image={okoth}
        />
        <Friend
          name="ann wangari maina"
          githubLink="https://github.com/ANNMAINAWANGARI"
          linkedinLink="https://www.linkedin.com/in/wangari-maina/"
          description="a highly seasoned front-end web developer with ReactJS and Typescript and an eager to learn type of person."
          image={ann}
        />
      </div>
    </section>
  );
};

export default Friends;
