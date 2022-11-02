import { useEffect, useState } from "react";

import { ApiKey } from "../card/settings";

export const useForcast = (coords) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    if (coords !== null) {
      const { lat, lon } = coords;
      // fetch(
      //   `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=alerts,current,minutely,hourly&appid=${ApiKey}`
      // )
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${ApiKey}&units=metric`
      )
        .then((res) => res.json())
        .then(setData);
    }
  }, [coords]);
  if (data !== null) {
    return data.list;
  }

  // return data;
};
