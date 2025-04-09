import { useRef, useState } from "react";
import Menu from "./Menu";
import "./App.css";

function App() {
  const [brush, setBrushColor] = useState("green");
  const [brushWidth, setBrushWidth] = useState(8);
  const [brushOpacity, setBurshOpacity] = useState(0.5);
  const canvasRef = useRef(null);

  return (
    <>
      <h1>Paint App</h1>
      <div className="drow-area">
        <Menu
          setBrush={setBrushColor}
          setBurshOpacity={setBurshOpacity}
          setBrushWidth={setBrushWidth}
        />
        <canvas
          width={"1200px"}
          height={"500px"}
          ref={canvasRef}
          onMouseDown={startDraw}
          onMouseUp={endDraw}
          onMouseMove={draw}
        ></canvas>
      </div>
    </>
  );
}

export default App;
