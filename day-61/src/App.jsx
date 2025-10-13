import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <h1>Word & Letter Counter</h1>
        <textarea name="" id=""></textarea>
        <section>
          <button>Clear</button>
          <button>Copy Text</button>
          <div className="grid">
            <div className="p-3"></div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
