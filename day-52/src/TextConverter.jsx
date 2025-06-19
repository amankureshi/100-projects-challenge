import { useState } from "react";

const TextConverter = () => {
  const [text, setText] = useState("");

  return (
    <div className="container">
      <h2>Enter the text to analyze below</h2>
      <textarea
        rows={8}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type or paste you text here"
      />
      <h3>Preview</h3>
      <p>{text.length > 0 ? text : "Enter the word to Preview"}</p>
      <div className="allBtn">
        <button className="btn" onClick={() => setText(text.toUpperCase())}>
          UPPER CASE
        </button>
        <button className="btn" onClick={() => setText(text.toLowerCase())}>
          lower case
        </button>
        <button className="btn" onClick={() => setText("")}>
          Clear All
        </button>
        <button
          className="btn"
          onClick={() => {
            navigator.clipboard.writeText(text);
          }}
        >
          Copy to clipboard
        </button>
      </div>
    </div>
  );
};

export default TextConverter;
