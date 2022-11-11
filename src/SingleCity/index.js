import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../App.css";
import { Card } from "../card";
import { useForcast } from "../hooks/useForcast";
import { TimeCard } from "../TimeCard";

// import {Card} from '../card'

export const SingleCity = () => {
  const [cityCoord, setCityCoord] = useState(null);
  const data = useForcast(cityCoord);
  const { city } = useParams();
  const navigate = useNavigate();
  return (
    <div className="SingleCityWrap">
      <button onClick={() => navigate(-1)} className="btn__back">
        Go back
      </button>
      <Card city={city} setCityCoord={setCityCoord} />
      {data && (
        <div className="TimeCards">
          {data.map((timeCard, index) => (
            <TimeCard timeCard={timeCard} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};
