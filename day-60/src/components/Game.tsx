import type React from "react"
import { useEffect, useState } from "react"
import Timer from "./Timer";

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
        if (time > 0) {
            const timer = setInterval(() => setTime((prev) => prev - 1), 1000);
            return () => clearInterval(timer);
        }
    }, [time]);

    const generateWord = () => {
        const random = words[Math.floor(Math.random() * words.length)];
        setWord(random);
        setScrambled(shuffleWord(random));
        setInput("");
    }

    const handleCheck = () => {
        if (userInput.toLowerCase() === word.toLocaleLowerCase()) {
            setScore(score + 1);
            generateWord();
        }
        else {
            alert("Wrong! Try Again.");
        }
    }

    const checkAnswer = () => {
        if (input.toLowerCase() === word.toLowerCase()) {
            setScore((prev) => prev + 1)
            generateWord();
        } else {
            alert("Wrong Anser!")
        }
    }

    if (gameOver) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-950 to-purple-700 text-white">
                <h1 className="text-3xl font-bold mb-6">Time's Up!</h1>
                <p className="text-xl mb-4">Your Finla Score: {score}</p>
                <button className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-white font-semibold transition">Play Again</button>
            </div>
        );
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-700 to-purple-800 text-white px-4">
            <div className="flex justify-between items-center w-full max-w-md mb-6">
                <h1 className="text-3xl font-bold mb-6">Word Scramble Game</h1>
                <Timer time={time} setTime={setTime} />
            </div>
            <div className="bg-white text-gray-800 rounded-2xl shadow-lg p-6 w-full max-w-md text-center">
                <h2 className="text-2xl mt-4 tracking-widest font-mono">{scrambled}</h2>
                <p className="text-3xl font-bold text-indigo-700 tracking-widest mb-6">{scrambledWord}</p>

                <input type="text" className="w-full border rounded-lg px-4 py-2 text-center text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4" onChange={(e) => setInput(e.target.value)} value={input} />
                <div className="flex justify-center gap-4">

                    <button className="px-5 py-2 bg-indigo-600 text-white
                ">
                        Check
                    </button>
                    <button className="px-5 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
                        onClick={generateWord}
                    >
                        Skip
                    </button>
                </div>
            </div>
            <p className="mt-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition">

            </p>
            )
        }

            {time === 0 && (
                <div className="mt-6 text-center">
                    <h2>Game over</h2>
                    <p className="text-lg">
                        Your Final Score:{score}
                    </p>
                    <button onClick={generateWord}
                        className="mt-4 bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600">
                        Restart
                    </button>
                </div>
            )}
        </div>
    );
};

export default Game