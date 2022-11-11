import React from "react";
import "../App.css";

export const TimeCard = ({ timeCard }) => {
  const { dt, weather } = timeCard;
  const { icon, main } = weather[0];
  const { temp } = timeCard.main;
  const date = new Date(dt * 1000);

  return (
    <div className="TimeCard">
      <div className="TimeDay">{date.toString().split(" ")[0]}</div>
      <div className="TimeDay">{date.getHours() + " : 00"}</div>

      <img
        className="card_icon"
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="icon"
      ></img>
      <div className="card_title">{main}</div>
      <div className="card__temperature ">{temp.toFixed(0)}</div>
    </div>
  );
};
