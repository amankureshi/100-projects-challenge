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
        <textarea className="border-2 rounded" name="" id=""></textarea>
        <section>
          <button>Clear</button>
          <button>Copy Text</button>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center mt-6">
            <div className="bg-indigo-100 p-3 rounded-lg">
              <p className="text-lg font-bold">wordCount</p>
              <p className="text-sm text-indigo-700 font-medium">Words</p>
            </div>

            <div className="bg-indigo-100 p-3 rounded-lg">
              <p className="text-lg font-bold">charCount</p>
              <p className="text-sm text-indigo-700 font-medium">Characters</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
