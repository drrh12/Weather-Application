import React from "react";

const Condition = ({temp, condition}) => {
  return (
    <div>
      <h1 className="temperature">{temp} °C</h1>
    <h3 className="condition">{condition}</h3>
    </div>
  );
};

export default Condition;
