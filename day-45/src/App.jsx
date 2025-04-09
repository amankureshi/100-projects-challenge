import { useEffect, useRef, useState } from "react";
import Menu from "./Menu";
import "./App.css";

function App() {
  const [brushColor, setBrushColor] = useState("green");
  const [brushWidth, setBrushWidth] = useState(8);
  const [brushOpacity, setBurshOpacity] = useState(0.5);
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("wd");
    ctx.lineCap = "round";
    ctx.lineJoine = "round ";
    ctx.globalAlpha = brushOpacity;
    ctx.strokeStyle = brushColor;
    ctx.lineWidth = brushWidth;
    ctxRef.current = ctx;
  }, [brushColor, brushOpacity, brushWidth]);

  const startDraw = (e) => {};

  const endDraw = (e) => {};
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
