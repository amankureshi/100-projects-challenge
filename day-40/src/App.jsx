import React, { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import { ToastContainer, toast } from "react-toastify";
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
    toast.success("Copied to Clipboard !", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
    });
  };

  return (
    <>
      <h1>Emoji</h1>
      {chooseEmoji && (
        <div className="selected-emoji">
          <p>selected Emoji : {chooseEmoji}</p>
        </div>
      )}
      <div className="emoji-picker">
        <EmojiPicker onEmojiClick={emojiPickerFunction}></EmojiPicker>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
