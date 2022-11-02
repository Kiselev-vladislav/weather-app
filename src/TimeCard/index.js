import React, { useState } from "react";
import "../App.css";
import { useParams } from "react-router-dom";
import { Card } from "../card";
import { useForcast } from "../hooks/useForcast";

// import {Card} from '../card'

export const TimeCard = ({ timeCard }) => {
  const { dt, dt_txt, weather } = timeCard;
  const { icon, main } = weather[0];
  const { temp } = timeCard.main;
  console.log(dt_txt);
  console.log(dt);
  const date = new Date(dt_txt);
  // const day = date.getDay() + "." + date.getMonth();
  const time = date.getHours() + "." + date.getMinutes() + "0";
  console.log(date.toLocaleString("ru", { month: "long" }));

  return (
    <div className="TimeCard">
      <div className="TimeDay">{time}</div>
      <div className="TimeDt">{time}</div>
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
