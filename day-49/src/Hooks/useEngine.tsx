import { useState } from "react"
import useWords from "./useWords"
import useCountdownTimer from "./useCountdownTimer";
import useTypings from "./useTypings";

export type State = "start" | "run" | "finish"

const NUMBER_OF_WORDS = 12;
const COUNTDOWN_SECONDS = 30;

const useEngine = () => {
    const [state, setState] = useState<State>("start")
    const { words, updateWords } = useWords(NUMBER_OF_WORDS)
    const { timeLeft, startCountdown, resetCountdown } = useCountdownTimer(COUNTDOWN_SECONDS)
    const { typed, cursor, clearTyped, resetTotalTyped, totayTyped } =
        useTypings(state !== 'finish')
    return { state, words, timeLeft, typed }
}
export default useEngine;