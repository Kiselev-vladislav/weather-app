import React, {memo, useContext} from "react";
import { GlobalCotext } from "../App";
import '../App.css';
import { useWeather } from "../hooks/useWeather";


  const CardNoMemo = ({city}) => {
  const data = useWeather(city)
  const {dispatch} = useContext(GlobalCotext)
  if(!data) return null;
  const {main, weather, name} = data
  const {description, icon} = weather[0]
  const {temp, humidity, feels_like} = main

  const handleOnDelete = () => {
    dispatch({
      type: 'DELETE_CITY',
      payload: city
    })
  }

  const handleOnEdit = () => {
    dispatch({
      type: 'EDIT_CITY',
      payload: city
    })
  }

  return (
    <div className="card">
      <div className="btns__wrap">
        <button className="action__btn" onClick={handleOnEdit}>edit</button>
        <button className="action__btn" onClick={handleOnDelete}>X</button>
      </div>

      <div className="card__content">
        <img className="card_icon" src= {`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon"></img>
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
}

export const Card = memo(CardNoMemo)