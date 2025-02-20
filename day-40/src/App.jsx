import React, { useState } from "react";
import EmojiPicker from "emoji-picker-react";
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
      <div className="selected-emoji">
        <p>selected Emoji :</p>
        <span>{chooseEmoji}</span>
      </div>
      <div className="emoji-picker">
        <EmojiPicker onEmojiClick={emojiPickerFunction}></EmojiPicker>
      </div>
    </>
  );
}

export default App;
