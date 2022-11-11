import React, { memo, useContext, useEffect } from "react";
import { GlobalCotext } from "../App";
import "../App.css";
import { useWeather } from "../hooks/useWeather";
import { Link, useNavigate, useMatch } from "react-router-dom";

const CardNoMemo = ({ city, setCityCoord }) => {
  const data = useWeather(city);
  const { dispatch } = useContext(GlobalCotext);
  const navigate = useNavigate();
  const goback = () => navigate("/home", { replace: true });
  const isHome = Boolean(useMatch("/home"));

  useEffect(() => {
    if (data && data.coord.lat && data.coord.lon && setCityCoord) {
      setCityCoord({
        lat: data.coord.lat,
        lon: data.coord.lon,
      });
    }
  }, [data, setCityCoord]);
  const handleOnDelete = (event) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch({
      type: "DELETE_CITY",
      payload: city,
    });
  };

  const handleOnEdit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch({
      type: "EDIT_CITY",
      payload: city,
    });
    goback();
  };

  const handleOnLinkClick = () => {
    dispatch({
      type: "EDIT_CITY_DONE",
    });
    goback();
  };
  if (data === null) {
    return (
      <div className="card">
        <div className="btns__wrap">
          <button className="action__btn" onClick={handleOnEdit}>
            edit
          </button>
          <button className="action__btn" onClick={handleOnDelete}>
            X
          </button>
        </div>
        <div className="card__content">
          <div className="card__title">{city}</div>
          <div className="card__description">Not found</div>
        </div>
      </div>
    );
  }
  if (!data) return null;
  const { main, weather, name } = data;
  const { description, icon } = weather[0];
  const { temp, humidity, feels_like } = main;

  if (isHome) {
    return (
      <Link
        to={`/city/${city.toLowerCase()}`}
        onClick={handleOnLinkClick}
        className="card"
      >
        <div className="btns__wrap">
          <button className="action__btn" onClick={handleOnEdit}>
            edit
          </button>
          <button className="action__btn" onClick={handleOnDelete}>
            X
          </button>
        </div>
        <div className="card__content">
          <img
            className="card_icon"
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            alt="icon"
          ></img>
          <div className="card__title">{name}</div>
          <div className="card__description">{description}</div>
          <div className="card__temperature">{temp.toFixed()}</div>
        </div>
        <div className="card__information">
          <div>Humidity: {humidity}</div>
          <div>Feels like: {feels_like}</div>
        </div>
      </Link>
    );
  }
  return (
    <div className="card">
      <div className="btns__wrap">
        <button className="action__btn" onClick={handleOnEdit}>
          edit
        </button>
        <button className="action__btn" onClick={handleOnDelete}>
          X
        </button>
      </div>
      <div className="card__content">
        <img
          className="card_icon"
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="icon"
        ></img>
        <div className="card__title">{name}</div>
        <div className="card__description">{description}</div>
        <div className="card__temperature">{temp.toFixed()}</div>
      </div>
      <div className="card__information">
        <div>Humidity: {humidity}</div>
        <div>Feels like: {feels_like}</div>
      </div>
    </div>
  );
};

export const Card = memo(CardNoMemo);
