import { useCallback, useEffect, useState } from "react";
import useWords from "./useWords";
import useCountdownTimer from "./useCountdownTimer";
import useTypings from "./useTypings";
import { countErrors } from "../utils/Helper";

export type State = "start" | "run" | "finish";

const NUMBER_OF_WORDS = 12;
const COUNTDOWN_SECONDS = 30;

const useEngine = () => {
    const [state, setState] = useState<State>("start");
    const { words, updateWords } = useWords(NUMBER_OF_WORDS);
    const { timeLeft, startCountdown, resetCountdown } =
        useCountdownTimer(COUNTDOWN_SECONDS);
    const { typed, cursor, clearTyped, resetTotalTyped, totayTyped } = useTypings(
        state !== "finish"
    );

    const [errors, setError] = useState(0);

    const isStarting = state === "start" && cursor > 0;
    const areWordsFinished = cursor === words.length;

    const sumErrors = useCallback(() => {
        const wordsReached = words.substring(0, cursor);
        setError((prevError) => prevError + countErrors(typed, wordsReached));
    }, [typed, words, cursor]);

    //As soon the user start typing the first letter, we start
    useEffect(() => {
        if (isStarting) {
            setState("run");
            startCountdown();
        }
    }, [isStarting, startCountdown, cursor]);

    //When the time is up, we've finished
    useEffect(() => {
        console.log("time is up....");
        setState("finish");
        sumErrors();
    }, [timeLeft, sumErrors]);

    useEffect(() => {
        if (areWordsFinished) {
            console.log("Words are finished");
            sumErrors();
            updateWords();
            clearTyped();
        }
    }, [
        cursor,
        words,
        clearTyped,
        typed,
        areWordsFinished,
        updateWords,
        sumErrors,
    ]);

    const restart = useCallback(() => {
        console.log("restarting...");
        resetCountdown();
        resetTotalTyped();
        setState(0);
        setErrors();
        updateWords();
        clearTyped();

    }, [clearTyped, updateWords, resetCountdown, resetTotalTyped])

    return { state, words, timeLeft, typed, errors, totalTyped, restart };
};
export default useEngine;
