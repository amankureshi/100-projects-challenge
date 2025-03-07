import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [principale, setPrincipale] = useState(0);
  const [interest, setInterest] = useState(0);
  const [year, setYear] = useState(0);
  const [emi, setEmi] = useState(0);

  const handleChange = (e) => {
    console.log(e.target.id, e.target.value);
    const id = e.target.id;
    const value = parseInt(e.target.value);
    if (id === "principle") {
      setPrincipale(value);
    } else if (id === "interest") {
      setInterest(value);
    } else {
      setYear(value);
    }
  };

  //P(r(1+r)^n/((1+r)^n)-1))
  const calculateEMI = () => {
    let r = interest;
    if (principale && r && year) {
      r = r / 12 / 100; // Per month
      const calcPower = Math.pow(1 + r, year * 12);
      const amount = principale * ((r * calcPower) / (calcPower - 1));
      setEmi(amount);
    }
  };
  useEffect(() => {
    calculateEMI();
  }, [principale, interest, year]);
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
          <input onChange={handleChange} type="number" id="year" />
        </div>
        <div className="output">Your EMI is {emi}</div>
      </div>
    </>
  );
}

export default App;
