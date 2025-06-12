import { useState } from "react";
import "./App.css";
import { LC, NC, SC, UC } from "./Data/PassChar";

function App() {
  let [uppercase, setUppercase] = useState(false);
  let [lowercase, setLowercase] = useState(false);
  let [number, setNumber] = useState(false);
  let [symbols, setSymbols] = useState(false);
  let [passwordLen, setPasswordLen] = useState(10);

  let createPassword = () => {
    let charSet = "";
    if (uppercase || lowercase || number || symbols) {
      if (uppercase) charSet += UC;
      if (lowercase) charSet += LC;
      if (number) charSet += NC;
      if (symbols) charSet += SC;
      console.log(charSet);
    } else {
      alert("Please one Checkbox");
    }
  };

  return (
    <>
      <div className="passbox">
        <h2>Password Generator</h2>
        <div className="passwordBoxInput">
          <input type="text" /> <button>copy</button>
        </div>
        <div className="passwordLenght">
          <label>Password lenght</label>
          <input
            type="number"
            max={20}
            value={passwordLen}
            onChange={(event) => setPasswordLen(event.target.value)}
          />
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
        <button className="btn" onClick={createPassword}>
          Generate password
        </button>
      </div>
    </>
  );
}

export default App;
