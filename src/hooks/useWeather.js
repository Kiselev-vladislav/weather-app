import { useEffect, useState } from "react";

import {ApiKey} from '../card/settings'



export const useWeather = (city) => {
    const [data, setData] = useState(null)
    useEffect(() => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=metric`)
      .then(res => res.json())
      .then(setData)
    }, [city]);
    return data
}
