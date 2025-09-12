import React, { useState } from "react";
import SuggestionCard from "./SuggestionCard";
import { runChecks } from "../utils/Cheack";

const GrammarChecker = () => {
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  function handleCheck() {
    setSuggestions(runChecks(text));
  }

  function handleClear() {
    setText("");
    setSuggestions([]);
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">GrammarChecker Checker</h2>
      <textarea
        onChange={(e) => setText(e.target.value)}
        placeholder="Type or paste  your paragraph"
        className="w-full h-40 p-3 border rounded mb-3 bg-white"
      />
      <div className="flex gap-3 mb-4">
        <button
          onClick={handleCheck}
          className="px-4 py-2 rounded bg-blue-600 text-white cursor-pointer"
        >
          Check
        </button>
        <button
          onClick={handleClear}
          className="px-4 py-2 rounded border cursor-pointer"
        >
          Clear
        </button>
      </div>
      <h3 className="font-semibold mb-2">Seggestions({suggestions.length})</h3>
      {suggestions.length === 0 ? (
        <div className="text-sm text-gray-500">
          No suggestions. Try checking some text.
        </div>
      ) : (
        suggestions.map((s, i) => <SuggestionCard key={i} sug={s} />)
      )}
    </div>
  );
};

export default GrammarChecker;
