import React from "react";

const Title = ({mainTitle, backTitle}) => {
  return (
    <div className="title-box">
      <h2 className="title__title-main">{mainTitle}</h2>
      <h2 className="title__title-bg">{backTitle}</h2>
    </div>
  );
};

export default Title;
