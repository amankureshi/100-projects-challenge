import "./app.css";
import { useState } from "react";
export function App() {
  const arr = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    ".",
    "0",
    "+",
    "c",
    "=",
  ];
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleClick = (e) => {
    const id = e.target.id;
    if (id === "c") {
      setValue("");
    } else if (id === "=") {
      //prouduce a result
      handleSubmit();
    } else {
      setValue((val) => val + id);
    }
    console.log();
  };
  console.log(value);

  const handleSubmit = (e) => {
    e?.preventDefault();
    try {
      const ans = eval(value);
      setValue(ans);
    } catch (err) {
      alert("Invalid Inputs");
    }
  };

  return (
    <>
      <div className="container">
        <h1>Calculator </h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={value} onChange={handleChange} />
        </form>
        <div className="form-container" onClick={handleClick}>
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
