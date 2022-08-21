import React from "react";
import { Github, LinkedIn, User } from "../Icons/Icons";

const Friend = ({ name, githubLink, linkedinLink, image, description }) => {
  return (
    <div className="friend">
      <div className="friend__header">
        <p className="friend__name">{name}</p>
        <div className="friend__social">
          <a
            href={githubLink}
            className="friend__social--link"
            target="_blank"
            rel="noreferrer"
          >
            <Github />
          </a>
          <a
            href={linkedinLink}
            className="friend__social--link"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedIn />
          </a>
        </div>
      </div>
      <div className="friend__body">
        <div className="friend__body--image">
          {/* {<img alt={name} className="friend__body--image--img" src={image} /> || <User />} */}
          {image ? (
            <img alt={name} className="friend__body--image--img" src={image} />
          ) : (
            <User />
          )}
        </div>
        <div className="friend__description">
          <p className="friend__description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Friend;
