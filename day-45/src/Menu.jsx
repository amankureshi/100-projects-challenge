import React from "react";

const Menu = () => {
  return (
    <div>
      <div className="menu">
        <label htmlFor="bursh">Brush Color:</label>
        <input type="color" />

        <label htmlFor="brush_opacity">Brush Width</label>
        <input type="range" min={1} max={100} />
      </div>
    </div>
  );
};

export default Menu;
