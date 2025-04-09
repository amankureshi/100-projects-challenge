import { useEffect, useRef, useState } from "react";
import Menu from "./Menu";
import "./App.css";

function App() {
  const [brushColor, setBrushColor] = useState("green");
  const [brushWidth, setBrushWidth] = useState(8);
  const [brushOpacity, setBurshOpacity] = useState(0.1);
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const [isDraw, setIsDraw] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.lineCap = "round";
    ctx.lineJoin = "round ";
    ctx.globalAlpha = brushOpacity;
    ctx.strokeStyle = brushColor;
    ctx.lineWidth = brushWidth;
    ctxRef.current = ctx;
  }, [brushColor, brushOpacity, brushWidth]);

  const startDraw = (e) => {
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetXY);
    setIsDraw(true);
  };
  const endDraw = () => {
    setIsDraw(false);
  };

  const draw = (e) => {
    if (!isDraw) {
      return;
    }
    ctxRef.current.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctxRef.current.stroke();
  };

  const resetCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setBrushColor("green");
    setBrushWidth(8);
    setBurshOpacity(0.1);
  };

  return (
    <>
      <h1>Paint App</h1>
      <div className="drow-area">
        <Menu
          setBrushColor={setBrushColor}
          brushColor={brushColor}
          setBurshOpacity={setBurshOpacity}
          setBrushWidth={setBrushWidth}
          resetCanvas={resetCanvas}
        />
        <canvas
          width={"776px"}
          height={"390px"}
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
