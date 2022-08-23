import React from "react";
import { Github, ArrowRight } from "../Icons/Icons";

const Repo = ({repoName, description, link}) => {
    return(
        <div className="repo">
            <span className="repo__icon">
                <Github />
            </span>
            <h3 className="repo__name">{repoName}</h3>
            <p className="repo__description">{description}</p>
            <a href={link} className="repo__link">visit repo <ArrowRight /></a>
        </div>
    )
}

export default Repo;