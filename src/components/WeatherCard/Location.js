import React from "react";

const Location = ({ city, country }) => {
  return (
    <div className="location">
      <h1 className="city">{city}</h1>
      <h3 className="country">{country}</h3>
    </div>
  );
};

export default Location;
