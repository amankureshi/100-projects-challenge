import React from "react";
import "./TexttoVoice.css";
import { MdKeyboardVoice } from "react-icons/md";
const TexttoVoiceGen = () => {
  return (
    <div>
      <div className="container">
        <div className="text-center mb-4">
          <h1>
            Text to <span>speech</span> converter
          </h1>
        </div>
        <div className="card p-4">
          <div className="mb-3">
            <textarea name="" id="" className="form-control"></textarea>
          </div>
          <div className="mb-3">
            <select name="select-name" id="" className="form-select">
              <option value="Select option">Select option</option>
            </select>
          </div>
          <div className="btn btn-dark">
            Listen <MdKeyboardVoice />
          </div>
        </div>
      </div>
      <div className="bottom-image">
        <img
          src="https://img.freepik.com/free-vector/voice-control-concept-illustration_114360-1250.jpg?t=st=1734669881~exp=1734673481~hmac=7d4cb9cf27d34dc77cdc6f88a05e19e7b5559c9969c31ea5602db34f7a380bfd&w=740"
          alt="voice-image"
        />
      </div>
    </div>
  );
};

export default TexttoVoiceGen;
