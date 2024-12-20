import React, { useEffect, useState } from "react";
import "./TexttoVoice.css";
import { MdKeyboardVoice } from "react-icons/md";
const TexttoVoiceGen = () => {
  const [text, setText] = useState('');
  const [voice, setVoice] = useState(null);
  const [voices, setVoices] = useState([]);

  useEffect(() => {
    const synth = window.speechSynthesis
    const handleVoiceChanged = () => {
      setVoices(synth.getVoices())
    }
    handleVoiceChanged();
    synth.onvoiceschanged = handleVoiceChanged;
    return () => {
      synth.onvoiceschanged = null;
    }
  }, [])
  const handleTextChange=(e) => {
    setText(e.target.value);
  }
  const handleVoiceChange = (e) => {
    setVoice(e.target.value)
  }
  const speak = () => {
    if (text !== "" && voice) {
      const speech = new SpeechSynthesisUtterance(text)
      speech.voice = speechSynthesis.getVoices().find((v) => v.name === voice)
      speechSynthesis.speak(speech)
    }
  }


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
            <textarea name="text" id="text" placeholder="Enter Text here" className="form-control" rows={6}
            value={text} onChange={handleTextChange}></textarea>
          </div>
          <div className="mb-3">
            <select name="select-name" id="" className="form-select" onChange={handleVoiceChange}>
              <option value="">Select option</option>
              {
                voices.map((voice,index) => (
                  <option key={index} value={voice.name}>
                    {voice.name}
                  </option>
                ))
              }
            </select>
          </div>
          <div className="btn btn-dark" onClick={speak}>
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
