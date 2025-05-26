import { useCallback, useRef, useState } from "react"

const useCountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(second)
  const intervalRef = useRef<NodeJS.Timer | null>(null);

  const startCountdown = useCallback(() => {
    console.log("Starting countdown...");

    intervalRef.current = setInterval(() => {
      setTimeLeft((timeLeft) => timeLeft - 1);
    }, 1000)
  }, [setTimeLeft]);


  return {timeLeft,startCountdown,resetCountdown}
}

export default useCountdownTimer
