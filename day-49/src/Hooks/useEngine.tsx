import { useCallback, useState } from "react"
import useWords from "./useWords"
import useCountdownTimer from "./useCountdownTimer";
import useTypings from "./useTypings";
import { countErrors } from "../utils/Helper";

export type State = "start" | "run" | "finish"

const NUMBER_OF_WORDS = 12;
const COUNTDOWN_SECONDS = 30;

const useEngine = () => {
    const [state, setState] = useState<State>("start")
    const { words, updateWords } = useWords(NUMBER_OF_WORDS)
    const { timeLeft, startCountdown, resetCountdown } =
        useCountdownTimer(COUNTDOWN_SECONDS)
    const { typed, cursor, clearTyped, resetTotalTyped, totayTyped } =
        useTypings(state !== 'finish')

    const [errors, setError] = useState(0);
    const sumErrors = useCallback(() => {
        const wordsReached = words.substring(0, cursor);
        setError((prevError) => prevError + countErrors(typed, wordsReached))
    }, [typed, words, cursor])

    return { state, words, timeLeft, typed }
}
export default useEngine;