import React from "react";

const Menu = ({
  setBrushColor,
  setBurshOpacity,
  setBrushWidth,
  resetCanvas,
}) => {
  return (
    <div>
      <div className="menu">
        <label htmlFor="bursh">Brush Color:</label>
        <input
          type="color"
          onChange={(e) => {
            setBrushColor(e.target.value);
          }}
        />

        <label htmlFor="brush_width">Brush Width:</label>
        <input
          type="range"
          min={3}
          max={20}
          onChange={(e) => {
            setBrushWidth(e.target.value);
          }}
        />

        <label htmlFor="brush_opacity">Brush Opacity:</label>
        <input
          type="range"
          min={1}
          max={100}
          onChange={(e) => {
            setBurshOpacity(e.target.value);
          }}
        />
        <button onClick={resetCanvas}>Reset</button>
      </div>
    </div>
  );
};

export default Menu;
