import React from "react";

const Box = ({ title, item, result }) => {
  return (
    <div className={`display-box ${result}`}>
      <p>{title}</p>
      <div className="display-icon">{item?.icon || "❔"}</div>
    </div>
  );
};

export default Box;
