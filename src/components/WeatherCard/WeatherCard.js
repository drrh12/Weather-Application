import React from "react";

import Location from "./Location"
import Icon from "./Icon"
import Condition from "./Condition";

const WeatherCard = props => {
  return (
    <div className="card">
      <Location/>
      <Icon />
      <Condition />
    </div>
  );
};

export default WeatherCard;
