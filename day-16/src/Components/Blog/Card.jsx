import React from "react";
import CData from "./CData";
import "./Card.css";

const Card = () => {
  return (
    <div className="card grid top">
      {CData.map((value) => {
        return (
          <div className="box" key={value.id}>
            <div className="iamge">
              <img src={value.cover} alt="" width={200} />
            </div>
            <span>{value.category}</span>
            <h2>{value.title}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
