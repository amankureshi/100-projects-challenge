import { useState } from "react";

const TextConverter = () => {
  const [text, setText] = useState("");

  return (
    <div className="container">
      <h2>Enter the text to analyze below</h2>
      <textarea rows={8} value={text}>
        <h3>Preview</h3>
        <p>Text here....</p>
      </textarea>
    </div>
  );
};

export default TextConverter;
