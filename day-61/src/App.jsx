import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { MdOutlineClear } from "react-icons/md";
import { IoCopy } from "react-icons/io5";

function App() {
  const [text, setText] = useState("");
  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const charCount = text.length;
  const spaceCount = (text.match(/ /g) || []).length;
  const sentenceCount = (text.match(/[.!?]+/g) || []).length;

  const handleClear = () => setText("");

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard");
  };

  return (
    <header>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br text-gray-800 px-4">
        <div className="bg-white shadow-2xl rounded-2xl p-6 w-full max-w-lg">
          <h1 className="text-3xl font-bold text-center text-slate-700 mb-6">
            Word & Letter Counter
          </h1>
          <textarea
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Start typing your text here..."
          />
          <section className="flex justify-between mt-5">
            <button
              onClick={handleClear}
              className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 text-center me-2 mb-2 flex items-center gap-2"
            >
              <MdOutlineClear className="text-lg" />
              <span>Clear</span>
            </button>

            <button
              onClick={handleCopy}
              className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 text-center me-2 mb-2 flex items-center gap-2"
            >
              <IoCopy />
              <span>Copy Text</span>
            </button>
          </section>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center mt-6">
            <div className="bg-indigo-100 p-3 rounded-lg">
              <p className="text-lg font-bold">{wordCount}</p>
              <p className="text-sm text-indigo-700 font-medium">Words</p>
            </div>

            <div className="bg-indigo-100 p-3 rounded-lg">
              <p className="text-lg font-bold">{charCount}</p>
              <p className="text-sm text-indigo-700 font-medium">Characters</p>
            </div>

            <div className="bg-indigo-100 p-3 rounded-lg">
              <p className="text-lg font-bold">{spaceCount}</p>
              <p className="text-sm text-indigo-700 font-medium">Spaces</p>
            </div>

            <div className="bg-indigo-100 p-3 rounded-lg">
              <p className="text-lg font-bold">{sentenceCount}</p>
              <p className="text-sm text-indigo-700 font-medium">Sentences</p>
            </div>
          </div>

          <p className="text-xs text-center text-gray-400 mt-5">
            Made with React + Tailwind CSS
          </p>
        </div>
      </main>
    </header>
  );
}

export default App;
