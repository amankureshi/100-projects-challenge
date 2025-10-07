import React, { useEffect } from "react";

interface TimerProps {
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
}

const Timer: React.FC<TimerProps> = ({ time, setTime }) => {
  useEffect(() => {
    if (time <= 0) return;
    const interval = setInterval(() => setTime((t) => t - 1), 1000);
    return () => clearInterval(interval);
  }, [time]);
  return (
    <div className="text-lg font-semibold bg-white text-indigo-700 px-4 py-1 rounded-full shadow">
      Time left: <span className="text-yellow-300">{time}s</span>
    </div>
  );
};

export default Timer;
