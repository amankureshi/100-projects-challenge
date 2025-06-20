import { useState } from "react";
import "./App.css";
import TextConverter from "./TextConverter";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "app dark-mode" : "app"}>
      <nav className="navbar">
        <h2>
          Text<span className="heading-h2">Converter</span>
        </h2>
        <label className="switch">
          <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
          <span className="slider"></span>
        </label>
      </nav>
      <TextConverter />
    </div>
  );
}

export default App;
