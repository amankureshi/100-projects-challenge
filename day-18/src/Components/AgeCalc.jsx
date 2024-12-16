import React from "react";
import "./AgeCalc.css";
const AgeCalc = () => {
  return (
    <>
      <h1>Age Calculator</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <div className="container">
        <div className="right">
          <h2>Date of Birth</h2>
          <div className="btn_div">
            <input className="date" type="date" />
            <button className="btn_age">Calculate Age</button>
            <button className="btn_age">Reset</button>
          </div>
        </div>
        <div className="left">
          <div className="container_fluid">
            <h1>Age</h1>
          </div>
          <div className="age_heading">20</div>
        </div>
      </div>
    </>
  );
};

export default AgeCalc;
