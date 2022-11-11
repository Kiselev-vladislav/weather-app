import { useEffect, useState } from "react";

import { ApiKey } from "../card/settings";

export const useWeather = (city) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=metric`
    )
      .then((res) => res.json())
      .then((fetchedData) => {
        if (fetchedData && fetchedData.cod && fetchedData.cod === "404") {
          throw new Error("CITY_NOT_FOUND");
        } else {
          setData(fetchedData);
        }
      })
      .catch((err) => {
        console.error("err:", err);
        setData(null);
      });
  }, [city]);
  return data;
};
