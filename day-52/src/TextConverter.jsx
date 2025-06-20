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
        <button
          className="btn"
          onClick={() => setText(text.replace(/\s+/g, "").trim())}
        >
          Clear space
        </button>
        <button
          className="btn"
          onClick={() => setText(text.split("").reverse().join(""))}
        >
          Reverse Wod
        </button>
        <button
          className="btn"
          onClick={() => setText(text.split("").reverse().join(""))}
        >
          Reverse Sentence
        </button>
      </div>
      <div className="summary">
        <h2>Word summary</h2>
        <p>
          {text.trim() === "" ? 0 : text.trim().split(/\s+/).length} Words and{" "}
          {text.length} characters
        </p>
        <p>
          {text.trim() === ""
            ? 0
            : text.trim().split(/\s+/).length * (0.008).toFixed(2)}{" "}
          Minutes read {text.length} characters
        </p>
        <p>{text.length > 0 ? text : "Enter the word to Preview"}</p>
      </div>
    </div>
  );
};

export default TextConverter;
