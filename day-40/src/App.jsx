import React, { useState } from "react";
import "./App.css";

function App() {
  const [chooseEmoji, setChooseEmoji] = useState();

  const copyEmojiFuction = (text) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  };

  const emojiPickerFunction = (emojiObject) => {
    const emoji = emojiObject.emoji;
    setChooseEmoji(emoji);
    copyEmojiFuction(emoji);
  };

  return (
    <>
      <h1>Emoji</h1>
    </>
  );
}

export default App;
