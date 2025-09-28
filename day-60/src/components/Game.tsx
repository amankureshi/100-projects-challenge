import type React from "react"
import { useState } from "react"


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

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Word Scramble Game</h1>
            <p className="text-lg">time here</p>
            <p className="text-lg">score:</p>
            <h2>scrambled</h2>
            <input type="text" className="mt-4 p-2 text-black rounded-md" />
            <div className="mt-4 space-x-4">
                <button className="bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600 ">
                    Submit
                </button>
                <button className="by-yellow-500 px-4 rounded-lg hover:bg-yellow-600">
                    Next Word
                </button>
            </div>
        </div>
    )
}

export default Game