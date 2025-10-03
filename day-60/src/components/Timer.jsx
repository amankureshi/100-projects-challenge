import React, { useEffect } from "react";

const Timer: React.FC<TimerProps> = ({ time, setTime }) => {
  useEffect(() => {
    if (time > 0) {
      const interval = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [time, setTime]);
  return (
    <div className="text-lg font-semibold">
      Time left: <span className="text-yellow-300">{time}s</span>
    </div>
  );
};

export default Timer;
