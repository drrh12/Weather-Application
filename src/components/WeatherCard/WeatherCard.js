import React from "react";
import styled from "@emotion/styled";

import Location from "./Location";
import Icon from "./Icon";
import Condition from "./Condition";

const WeatherCard = ({temp, condition, city, country}) => {
  
  let highColor, lowColor, bg = 0;

  if (temp > 15) {
    highColor = 1 - ((temp - 12) / 38) * 255;
    lowColor = highColor - 150;
    bg = `
      linear-gradient(
      to top,
      rgb(255, ${highColor}, 0),
      rgb(255, ${lowColor}, 0)
      );
    `
  } else if (temp <= 12) {
    highColor = (1 - (temp + 12) / 32) * 255;
    lowColor = highColor - 150;
    bg = `
      linear-gradient(
      to top,
      rgb(0, ${highColor}, 255),
      rgb(0, ${lowColor}, 255)
      );
    `
  }

  const Card = styled.div`
    background: ${bg}
    display: flex;
  `;

  return (
    <Card className="card">
      <Location city={city} country={country} />
      <Icon condition={condition}/>
      <Condition temp={temp} condition={condition} />
    </Card>
  );
};

export default WeatherCard;
