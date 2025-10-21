import React from "react";

const Box = ({ title, item }) => {
  const defaultImg =
    "https://i.pinimg.com/474x/3e/c0/d4/3ec0d48e3332288604e8d48096296f3e.jpg";

  return (
    <div className="box">
      <h1>{title}</h1>
      <img
        className="item-img"
        src={item?.img || defaultImg}
        alt={item?.name || "default"}
      />
      <h2>{item?.name || "READY"}</h2>
    </div>
  );
};

export default Box;
