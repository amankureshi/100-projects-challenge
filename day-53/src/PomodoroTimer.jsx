import React, { useState } from "react";

const PomodoroTimer = () => {
  const [time, setTime] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
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
    </div>
  );
};

export default PomodoroTimer;
