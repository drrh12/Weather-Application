import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.scss";
import WeatherCard from "./components/WeatherCard/WeatherCard";
import Location from "./components/WeatherCard/Location";

function App() {
  const [query, setQuery] = useState("Krasnoyarsk");
  const [weather, setWeather] = useState({
    temp: null,
    city: null,
    condition: null,
    country: null
  });

  const data = async q => {
    const apiRes = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&APPID=ead418f73ff52100addb451e4e0e0265`
    );

    const resJSON = await apiRes.json();
    return resJSON;
  };

  const handleSearch = e => {
    e.preventDefault();
    data(query)
      .then(res => {
        setWeather({
          temp: Math.trunc(res.main.temp),
          condition: res.weather[0].main,
          country: res.sys.country,
          city: res.name
        });
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    data(query)
      .then(res => {
        setWeather({
          temp: Math.trunc(res.main.temp),
          condition: res.weather[0].main,
          country: res.sys.country,
          city: res.name
        });
      })
      .catch(err => console.log(err));
  }, [weather]);

  return (
    <div className="App">
      <h1>Weather App</h1>
      <h4>Made to study React hooks and API consuming</h4>
      <WeatherCard
        temp={weather.temp}
        condition={weather.condition}
        city={weather.city}
        country={weather.country}
      />
      <form action="">
        <input value={query} onChange={e => setQuery(e.target.value)} />
        <br></br>
        <button onClick={e => handleSearch(e)}>Search</button>
      </form>
    </div>
  );
}

export default App;
