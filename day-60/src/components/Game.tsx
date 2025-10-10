import type React from "react"
import { useEffect, useState } from "react"
import Timer from "./Timer";
import { FaCheckCircle, FaExchangeAlt } from "react-icons/fa";

const words = ["react", "typescript", "frontend", "developer", "challange"]
const shuffleWord = (word: string) => {
    return word.split("").sort(() => Math.random() - 0.5).join("")
};
const Game: React.FC = () => {
    const [word, setWord] = useState("");
    const [scrambled, setScrambled] = useState("");
    const [input, setInput] = useState("");
    const [score, setScore] = useState(0);
    const [time, setTime] = useState(30);
    const [gameOver, setGameOver] = useState(false)

    useEffect(() => {
        generateWord();
    }, []);

    useEffect(() => {
        if (time <= 0) {
            setGameOver(true)
        }
    }, [time]);

    const generateWord = () => {
        const random = words[Math.floor(Math.random() * words.length)];
        setWord(random);
        setScrambled(shuffleWord(random));
        setInput("");
    }

    const checkAnswer = () => {
        if (input.toLowerCase() === word.toLowerCase()) {
            setScore((prev) => prev + 1)
            generateWord();
        } else {
            alert("Wrong Anser!")
        }
    }

    const playAgain = () => {
        setScore(0)
        setTime(30)
        setGameOver(false)
        generateWord();
    }

    if (gameOver) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-950 to-purple-700 text-white">
                <h1 className="text-3xl font-bold mb-6">Time's Up!</h1>
                <p className="text-xl mb-4">Your Final Score: {score}</p>
                <button className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-white font-semibold transition" onClick={playAgain}>Play Again</button>
            </div>
        );
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-700 to-purple-800 text-white px-4">
            <div className="flex justify-between items-center w-full max-w-md mb-6">
                <h1 className="text-3xl font-bold mb-6">Word Scramble Game</h1>
            </div>
            <div className="bg-white text-gray-800 rounded-2xl shadow-lg p-6 w-full max-w-md text-center">
                <section className="flex justify-between">
                    <p className="text-3xl font-bold text-indigo-700 tracking-widest mb-6">{scrambled}</p>
                    <Timer time={time} setTime={setTime} />
                </section>
                <input type="text" className="w-full border rounded-lg px-4 py-2 text-center text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4" onChange={(e) => setInput(e.target.value)} value={input} />
                <div className="flex justify-center gap-4 mt-4">
                    <button
                        onClick={checkAnswer}
                        className="inline-flex items-center gap-2 px-6 py-2 bg-indigo-600 text-white rounded-full font-semibold text-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-200"
                    >
                        <FaCheckCircle />
                        Check
                    </button>

                    <button
                        onClick={generateWord}
                        className="inline-flex items-center gap-2 px-6 py-2 bg-gray-100 text-gray-800 rounded-full font-semibold text-lg shadow-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all duration-200"
                    >
                        <FaExchangeAlt />
                        Skip
                    </button>
                </div>
                <p className="mt-6 text-lg font-medium">Score:{score}</p>
            </div>
        </div>
    );
};

export default Game