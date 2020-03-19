import React from 'react';
import logo from './logo.svg';
import './App.scss';
import WeatherCard from './components/WeatherCard/WeatherCard';
import Location from './components/WeatherCard/Location'

function App() {
  return (
    <div className="App">
        <WeatherCard
        />
    </div>
  );
}

export default App;
