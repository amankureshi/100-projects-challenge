import React, { useEffect, useState } from "react";

const UseWindowResize = () => {
  const [window, setWindowSize] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    handleResize();
    window.addEventListner("resize", handleResize);

    return () => {
      window.addEventListner("resize,handleResize");
    };
  });
  return (
    <div>
      <h1>Use window resize</h1>
    </div>
  );
};

export default UseWindowResize;
