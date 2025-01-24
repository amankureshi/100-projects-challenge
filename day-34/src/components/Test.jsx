import React from "react";
import useWindowResize from "./UseWindowResize";

const Test = () => {
  const { width, height } = useWindowResize();

  return (
    <div className="container">
      <h1 className="title">Window Size</h1>
      <div className="size-box">
        <p className="size-text">
          <span>Width:</span> {width}px
        </p>
        <p className="size-text">
          <span>Height:</span> {height}px
        </p>
      </div>
    </div>
  );
};

export default Test;
