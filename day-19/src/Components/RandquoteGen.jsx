import React from "react";
import "./RandquoteGen.css";
function RandquoteGen() {
  return (
    <div className="quote_container">
      <div className="quote-box">
        <p className="quote-text text-center">Quote content here</p>
        <p className="qoute-write text-center">Abc text here</p>
      </div>
      <button className=" btn-primary mt-4">New Quote</button>
    </div>
  );
}

export default RandquoteGen;
