import React, { useState } from "react";

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
      <h2 h2 className="text-2xl font-bold mb-4">
        GrammarChecker Checker
      </h2>
      <textarea className="w-full h-40 p-3 border rounded mb-3 bg-white" />
    </div>
  );
};

export default GrammarChecker;
