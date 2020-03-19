import React from 'react';
import logo from './logo.svg';
import './App.scss';
import WeatherCard from './components/WeatherCard/WeatherCard';
import Location from './components/WeatherCard/Location'

function App({city, country}) {
  return (
    <div className="App">
        <WeatherCard temp={-5} condition="Snow" city='Sydney' country="AU"/>
        <WeatherCard temp={12} condition="Rain" city='Vitória' country="BR"/>
        <WeatherCard temp={40} condition="Dust" city='California' country="USA"/>
    </div>
  );
}

export default App;
