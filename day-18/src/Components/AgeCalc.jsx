import React, { useState } from "react";
import "./AgeCalc.css";
const AgeCalc = () => {
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState(0);
  const calculateAge = () => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDiff = today.getMonth() - birthDateObj.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDateObj.getDate())
    ) {
      age--;
    }
    setAge(age);
    console.log(age);
  };
  const calculateReset = () => {
    setBirthDate("");
    setAge();
  };

  return (
    <>
      <section className="container">
        <h1>Age Calculator</h1>
        <p>Calculate your age in years, months, and days effortlessly </p>
        <div className="container_middle">
          <div className="right">
            <h2>Date of Birth</h2>
            <div className="btn_div">
              <input
                className="date"
                type="date"
                value={birthDate}
                onChange={(e) => {
                  setBirthDate(e.target.value);
                }}
              />
              <button className="btn_age" onClick={calculateAge}>
                Calculate Age
              </button>
              <button className="btn_age" onClick={calculateReset}>
                Reset
              </button>
            </div>
          </div>
          <div className="left">
            <div className="container_fluid">
              <h1>Age</h1>
            </div>
            <div className="age_heading">{age > 0 ? `${age}` : ""}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AgeCalc;
