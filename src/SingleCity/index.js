import React, { useState } from "react";
import "../App.css";
import { useParams } from "react-router-dom";
import { Card } from "../card";
import { useForcast } from "../hooks/useForcast";
import { TimeCard } from "../TimeCard";

// import {Card} from '../card'

export const SingleCity = (props) => {
  const [cityCoord, setCityCoord] = useState(null);
  const data = useForcast(cityCoord);
  console.log("coord", cityCoord);
  const { city } = useParams(props);
  console.log(data);
  return (
    <div className="SingleCityWrap">
      <Card city={city} setCityCoord={setCityCoord} />
      {data && (
        <div className="TimeCards">
          {data.map((timeCard) => (
            <TimeCard timeCard={timeCard} key={timeCard.dt} />
          ))}
        </div>
      )}
    </div>
  );
};
