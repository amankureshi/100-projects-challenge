import React, { useState } from "react";

const PomodoroTimer = () => {
  const [time, setTime] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  return (
    <div className="timer-container">
      <h2>Pomodoro Timer</h2>
      <div className="timer-display">
        <p>time</p>
      </div>
    </div>
  );
};

export default PomodoroTimer;
