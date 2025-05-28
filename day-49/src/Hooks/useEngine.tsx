import { useCallback, useEffect, useState } from "react";
import useWords from "./useWords";
import useCountdownTimer from "./useCountdownTimer";
import useTypings from "./useTypings";
import { countErrors } from "../utils/Helper";

export type State = "start" | "run" | "finish";

const NUMBER_OF_WORDS = 15;
const COUNTDOWN_SECONDS = 30;

const useEngine = () => {
    const [state, setState] = useState<State>("start");
    const { words, updateWords } = useWords(NUMBER_OF_WORDS);
    const { timeLeft, startCountdown, resetCountdown } = useCountdownTimer(COUNTDOWN_SECONDS);
    const { typed, cursor, clearTyped, resetTotalTyped, totalTyped } = useTypings(state !== "finish");

    const [errors, setError] = useState(0);

    const isStarting = state === "start" && cursor > 0;
    const areWordsFinished = cursor === words.length;

    const sumErrors = useCallback(() => {
        const wordsReached = words.substring(0, cursor);
        setError((prevError) => prevError + countErrors(typed, wordsReached));
    }, [typed, words, cursor]);

    useEffect(() => {
        if (isStarting) {
            setState("run");
            startCountdown();
        }
    }, [isStarting, startCountdown, cursor]);

    useEffect(() => {
        if (timeLeft === 0) {
            setState("finish");
            sumErrors();
        }
    }, [timeLeft, sumErrors]);

    useEffect(() => {
        if (areWordsFinished) {
            sumErrors();
            updateWords();
            clearTyped();
        }
    }, [cursor, words, clearTyped, typed, areWordsFinished, updateWords, sumErrors]);

    const restart = useCallback(() => {
        resetCountdown();
        resetTotalTyped();
        setState("start");
        setError(0);
        updateWords();
        clearTyped();
    }, [clearTyped, updateWords, resetCountdown, resetTotalTyped]);

    // Show timeLeft as 0 when typing is finished, and do not show negative numbers after completion
    const displayedTimeLeft = state === "finish" ? 0 : timeLeft;

    return {
        state,
        words,
        timeLeft: displayedTimeLeft, // Reset to 0 if finish state is active
        typed,
        errors,
        totalTyped,
        restart
    };
};

export default useEngine;
