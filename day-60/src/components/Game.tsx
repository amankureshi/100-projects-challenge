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
        setTime(30);
    }

    const checkAnswer = () => {
        if (input.toLowerCase() === word.toLowerCase()) {
            setScore((prev) => prev + 1)
            generateWord();
        } else {
            alert("Wrong Anser!")
        }
    }

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Word Scramble Game</h1>
            <Timer time={time} setTime={setTime} />
            <p className="text-lg">score: {score}</p>
            <h2 className="text-2xl mt-4 tracking-widest font-mono">{scrambled}</h2>
            <input type="text" className="mt-4 p-2 text-black rounded-md" onChange={(e) => setInput(e.target.value)} value={input} />
            <div className="mt-4 space-x-4">
                <button className="bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600" onClick={checkAnswer}>
                    Submit
                </button>
                <button className="bg-yellow-500 px-4 py-2 rounded-lg hover:bg-yellow-600" onCanPlay={generateWord}>
                    Next Word
                </button>
            </div>

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