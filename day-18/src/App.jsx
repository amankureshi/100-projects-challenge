import { useState } from "react";
import "./App.css";
import AgeCalc from "./Components/AgeCalc";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AgeCalc />
    </>
  );
}

export default App;
