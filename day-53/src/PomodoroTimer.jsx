import React, { useEffect, useState } from "react";

const PomodoroTimer = () => {
  const [time, setTime] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }
    if (time === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(timer);
  }, [isRunning, time]);
  useEffect(() => {
    document.title = `${formatTime()} | Pomodoro Timer`;
  }, [time]);

  const formatTime = () => {
    const minutes = String(Math.floor(time / 60)).padStart(2, "0");
    const seconds = String(time % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  };
  return (
    <section>
      <div className="Heading">
        <h1>Pomodoro Timer by</h1>
        <span>Aman Kureshi</span>
      </div>
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
    </section>
  );
};

export default PomodoroTimer;
