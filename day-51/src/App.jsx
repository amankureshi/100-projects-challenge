import { useState } from "react";
import "./App.css";

function App() {
  let [uppercase, setUppercase] = useState(false);
  let [lowercase, setLowercase] = useState(false);
  let [number, setNumber] = useState(false);
  let [symbols, setSymbols] = useState(false);

  return (
    <>
      <div className="passbox">
        <h2>Password Generator</h2>
        <div className="passwordBoxInput">
          <input type="text" /> <button>copy</button>
        </div>
        <div className="passwordLenght">
          <label>Password lenght</label>
          <input type="number" max={20} />
        </div>
        <div className="passwordLenght">
          <label>Include uppercase letters</label>
          <input
            type="checkbox"
            checked={uppercase}
            onChange={() => setUppercase(!uppercase)}
          />
        </div>
        <div className="passwordLenght">
          <label>Include lowercase letters</label>
          <input
            type="checkbox"
            checked={lowercase}
            onChange={() => setLowercase(!lowercase)}
          />
        </div>
        <div className="passwordLenght">
          <label>Include numbers</label>
          <input
            type="number"
            checked={number}
            onChange={() => setNumber(!number)}
          />
        </div>
        <div className="passwordLenght">
          <label>Include symbols</label>
          <input
            type="cheakbox"
            checked={symbols}
            onChange={() => setSymbols(!symbols)}
          />
        </div>
        <button className="btn">Generate password</button>
      </div>
    </>
  );
}

export default App;
