import React, { useEffect, useState } from "react";

const PomodoroTimer = () => {
  const [time, setTime] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 100);
    }
    if (time === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(timer);
  }, [isRunning, time]);

  const formatTime = () => {
    const minutes = String(Math.floor(time / 60)).padStart(2, "0");
    const seconds = String(time % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  };
  return (
    <div className="timer-container">
      <h2>Pomodoro Timer</h2>
      <div className="timer-display">
        <p>{formatTime()}</p>
      </div>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "pause" : "start"}
      </button>
      <button
        onClick={() => {
          setIsRunning(false);
          setTime(25 * 60);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default PomodoroTimer;
