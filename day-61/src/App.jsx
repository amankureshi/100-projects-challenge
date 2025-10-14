import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const charCount = text.length;
  const spaceCount = (text.match(/ /g) || []).length;

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
