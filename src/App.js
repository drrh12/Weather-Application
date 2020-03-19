import React from 'react';
import logo from './logo.svg';
import './App.scss';
import WeatherCard from './components/WeatherCard/WeatherCard';
import Location from './components/WeatherCard/Location'

function App() {
  return (
    <div className="App">
        <WeatherCard temp={-5}/>
        <WeatherCard temp={12}/>
        <WeatherCard temp={40}/>
    </div>
  );
}

export default App;
