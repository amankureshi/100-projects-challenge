import { useState } from "react";
import "./App.css";

function App() {
  const [principale, setPrincipale] = useState(0);
  const [interst, setInterest] = useState(0);
  const [year, setYear] = useState(0);

  const handleChange = (e) => {
    console.log(e.target.id, e.target.value);
    const id = e.target.id;
    const value = parseInt(e.target.value);
    if (id === "principle") {
      setPrincipale(value);
    } else if (id === interest) {
      setInterest(value);
    } else {
      setYear(value);
    }
  };

  return (
    <>
      <div className="loan-calc">
        <h1>Mortgage Calculator</h1>

        <div className="inputes">
          <p>Principle:</p>
          <input onChange={handleChange} type="number" id="principle" />
          <p>Interest:</p>
          <input onChange={handleChange} type="number" id="interest" />

          <p>Years:</p>
          <input onChange={handleChange} type="number" id="years" />
        </div>
        <div className="output">Your EMI is 3000</div>
      </div>
    </>
  );
}

export default App;
