import { useState } from "react";
import Menu from "./Menu";
import "./App.css";

function App() {
  const [brush, setBrushColor] = useState();
  const [brushWidth, setBrushWidth] = useState();
  const [brushOpacity, setBurshOpacity] = useState();
  return (
    <>
      <h1>Aman Kureshi</h1>
      <div className="drow-area">
        <Menu
          setBrush={setBrushColor}
          setBurshOpacity={setBurshOpacity}
          setBrushWidth={setBrushWidth}
        />
      </div>
    </>
  );
}

export default App;
