import React from "react";

const TimeCard = ({ year, working, institution, descritption }) => {
  return (
    <div className="time-card">
      <h3 className="time-card__year">{year}</h3>
      <p className="time-card__working">{working}</p>
      <p className="time-card__institution">{institution}</p>
      <p className="time-card__description">{descritption}</p>
    </div>
  );
};

export default TimeCard;
