import { useState } from "react";
import "./App.css";

function App() {
  const [principale, setPrincipale] = useState(0);
  const [interst, setInterest] = useState(0);
  const [year, setYear] = useState(0);
  return (
    <>
      <div className="loan-calc">
        <h1>Mortgage Calculator</h1>

        <div className="inputes">
          <p>Principle:</p>
          <input type="number" id="principle" />
          <p>Interest:</p>
          <input type="number" id="interest" />

          <p>Years:</p>
          <input type="number" id="years" />
        </div>
        <div className="output">Your EMI is 3000</div>
      </div>
    </>
  );
}

export default App;
