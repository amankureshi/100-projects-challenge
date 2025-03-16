import "./app.css";
import { useState } from "react";
export function App() {
  const arr = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "+",
    "-",
    "/",
    "*",
    "=",
    "c",
    ".",
  ];
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <div className="container">
        <h1>Aman Kureshi</h1>
        <form>
          <input type="text" onChange={handleChange} />
        </form>
        <div className="form-container">
          {arr.map((item, idx) => (
            <button key={idx} id={item}>
              {item}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
